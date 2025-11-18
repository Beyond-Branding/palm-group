// TestimonialSwiper.jsx
"use client"; // Next.js / React 18 app-router; remove if not needed

import React, { useRef, useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Testimonial = {
  id: number;
  name?: string;
  location?: string;
  crop?: string;
  productUsed?: string;
  application?: string;
  shortText?: string;
  english?: string; // English full text
  regional?: string; // Regional language full text (optional)
  image?: string;
  area?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Shri Dattatray Patil",
    location: "Kavthe Mahankal, Sangli Maharashtra",
    productUsed: "Golden Drop + Crop Giant",
    application: "2nd Spray — 19th Day After Pruning (Grapes)",
    shortText:
      "Excellent results observed after using Golden Drop and Crop Giant together.",
    english: `Result:
“Excellent results observed after using Golden Drop and Crop Giant together. The bunches have become stronger, flowering is uniform, and fruit drop has reduced significantly. The vines show healthier growth and improved fruit setting.”`,
    regional: `वापर: दुसरी फवारणी — छाटणीनंतर १९ व्या दिवशी (द्राक्षे)
परिणाम:
"गोल्डन ड्रॉप आणि क्रॉप जायंट एकत्र वापरल्यानंतर उत्कृष्ट परिणाम दिसून आले. घड जीरणेची समस्या पूर्णपणे थांबली आहे; घड अधिक मजबूत झाले आहेत, फुले एकसारखी आली आहेत आणि फळ गळणे लक्षणीयरीत्या कमी झाले आहे. वेलींची वाढ चांगली झाली आहे आणि फळधारणा सुधारली आहे."`,
    image: "/dattrayatesti.jpg"
  },

  {
    id: 2,
    name: "Shivraj Billur",
    location: "Siddhanath, Taluka Jath",
    crop: "Grapes",
    area: "6 Acres",
    productUsed: "Golden Drop + Crop Giant",
    application: "2nd Spray — 19th Day After Pruning (Grapes)",
    shortText:
      "After using Golden Drop and Crop Giant together, the problem of ‘ghad jirne’ in grapes has completely stopped.",
    english: `Result:
“After using Golden Drop and Crop Giant together, the problem of ‘ghad jirne’ in grapes has completely stopped. The bunches are now stronger, fruits have better shine, and the storage quality has improved significantly. Very satisfied with the results.”`,
    regional: `वापर: दुसरी फवारणी — छाटणीनंतर १९ व्या दिवशी (द्राक्षे)
परिणाम:
"गोल्डन ड्रॉप आणि क्रॉप जायंट वापरल्यानंतर ‘घड जीरणे’ची समस्या पूर्णपणे थांबली आहे. घड मजबूत झाले, फळांना अधिक चमक आली आणि साठवणक्षमता खूपच सुधारली. या उत्पादनांच्या परिणामावर मी अत्यंत समाधानी आहे."`,
    image: "/shivrajtesti.jpg"
  },

  {
    id: 3,
    name: "Mr. Nimal Perera",
    location: "Walawela, Matale, Sri Lanka",
    crop: "Tomatoes & Onions",
    productUsed: "Golden Drop, Crop Giant",
    shortText:
      "As a farmer, ensuring both the health of my crops and the quality of my harvest is paramount.",
    english: `Result:
“As a farmer, ensuring both the health of my crops and the quality of my harvest is paramount. After incorporating Golden Drop and Crop Giant into my cultivation practices, I've seen remarkable improvements.
With Golden Drop, my tomato and onion plants reduced flower droppings and more vigorous growth, significantly enhancing their natural resistance. The overall health and vibrancy of my fields have never been better.
Crop Giant truly lived up to its name! It dramatically improved the size and firmness of my tomatoes, making them visually appealing and robust. For both my tomatoes and onions, I observed a fantastic increase in shelf life by an impressive 30-35%, all while maintaining zero chemical residue on the produce. 
”`,
    image: "/nimaltomato.png",
  },

  {
    id: 4,
    name: "Mr. Park Hyun Soo",
    location: "South Korea",
    productUsed: "Silicose, Palm Sulf",
    crop: "Paddy",
    shortText:
      "Silicose reduced fungal infection and strengthened plants during the monsoon.",
    english: `Result:
“Silicose reduced fungal infection and strengthened plants during the monsoon. Palm Sulf provided a reliable source of sulfur which could be used at high temperatures and controlled fungal issues effectively without chemicals.”`,
    image: "/parktesti.jpg"
  },

  {
    id: 5,
    name: "Mr. Ganesh Nivrutt Dhondge",
    location: "Rasegaon, Tal. Nashik",
    productUsed: "Golden Drop + AG-F",
    shortText:
      "I achieved phenomenal results using Golden Drop + AG-F for dormancy breaking in my vineyard.",
    english: `Result:
“I achieved phenomenal results using Golden Drop + AG-F for dormancy breaking in my vineyard. In just 18 days, my vines showed excellent, uniform shoot growth, as you can see in the pictures. The biggest win for me? I successfully achieved this strong growth without using any Hydrogen Cyanamide. This combination is the key to a healthier, faster, and more natural start to the season. I highly recommend it!”`,
    regional: `"माझ्या द्राक्ष बागेत फुटवा घेण्यासाठी मी गोल्डन ड्रॉप + AG-F वापरले आणि मला उत्कृष्ट परिणाम मिळाले. फक्त १८ दिवसांत वेलींवर एकसारखा आणि जोमदार फुटवा आला, जे तुम्ही चित्रांमध्ये पाहू शकता. माझ्यासाठी सर्वात मोठा फायदा म्हणजे? मी हायड्रोजन सायनमाइड वापरल्याशिवाय हा जोमदार फुटवा यशस्वीपणे साध्य केला. हा संयोजन हंगामाची सुरुवात नैसर्गिक आणि निरोगी करण्यासाठी सर्वोत्तम आहे. मी याची अत्यंत शिफारस करतो!"`,
    image: "/Ganeshtesti.jpg"
  },

  {
    id: 6,
    name: "Mr. Ramchandra Tukaram Patil",
    location: "Samdoli, Sangli Miraj",
    productUsed: "Golden Drop ",
    shortText:
      "I am Ramchandra Tukaram Patil from Samdoli, Sangli Miraj. I used Golden Drop on my Marigold crop",
    english: "I am Ramchandra Tukaram Patil from Samdoli, Sangli Miraj. I used Golden Drop on my Marigold crop, and the results are fantastic. It completely changed my flowering season! Golden Drop significantly induced heavy and early flowering. As you can see, the flowers are huge, have vibrant color, and there was no flower dropping. This product truly boosts yield quality. I highly recommend Golden Drop for anyone growing flowers!",
    regional: "माझे नाव रामचंद्र तुकाराम पाटील, सामडोळी (सांगली-मिरज) येथील रहिवासी आहे. मी माझ्या झेंडूच्या पिकावर गोल्डन ड्रॉप वापरले. रिझल्ट्स खूप चांगले आले! गोल्डन ड्रॉपने फुलांची संख्या मोठ्या प्रमाणात वाढवली आणि फुलगळ पूर्णपणे थांबवली. आपण पाहू शकता, फुलांचा आकार मोठा आणि रंग खूप आकर्षक आहे. या उत्पादनामुळे माझ्या उत्पन्नात मोठी वाढ झाली आहे. फुलशेती करणाऱ्या सर्व शेतकऱ्यांसाठी गोल्डन ड्रॉप अत्यंत उपयुक्त आहे.",
    image: "/ramchandratesti.jpg"
  },

  {
    id: 7,
    name: "Mr. Suresh Salunkhe",
    location: "Satara",
    crop: "Pomegranate",
    productUsed: "AG-F, Golden Drop, Palm Sulf, Crop Giant",
    shortText:
      "Using Palm's products has been a game-changer. AG-F helped me reduce my glyphosate dosage by 50%, saving on costs",
    english: "Using Palm's products has been a game-changer. AG-F helped me reduce my glyphosate dosage by 50%, saving on costs. Golden Drop was fantastic, cutting flower drop by 75% and leading to excellent fruit set. With Palm Sulf, my crop stayed healthy and free of mites. Finally, Crop Giant gave my pomegranates a great shine, firmness, and extended their shelf life, fetching a top price in the market. I highly recommend this complete package!",
    regional: "Palm ची उत्पादने वापरल्याने माझ्या डाळिंब बागेत मोठा फरक पडला. AG-F मुळे मला ग्लायफोसेटचा वापर ५०% कमी करता आला, ज्यामुळे खर्च वाचला. Golden Drop मुळे फुलगळ ७५% कमी झाली आणि फळधारणा चांगली झाली. Palm Sulf ने बागेतील रोग आणि कोळी नियंत्रण केले. सर्वात महत्त्वाचे म्हणजे, Crop Giant ने डाळिंबांना चांगली चमक, टणकपणा आणि उत्कृष्ट टिकाऊपणा दिला. या पूर्ण पॅकेजमुळे माझ्या मालाला बाजारात चांगला भाव मिळाला!",
    image: "/sureshtesti.jpg",
  },

  {
    id: 8,
    name: "Mr. Tanaji Kudale",
    location: "Tarale, Nashik",
    crop: "Soybean (KDS 726)",
    productUsed: "Golden Drop, AG-F",
    shortText:
      "On my 28-30 day old soybean crop, I used the combination of Golden Drop (6ml/pump) and AG-F (10ml/pump) in the first spray",
    english: "On my 28-30 day old soybean crop, I used the combination of Golden Drop (6ml/pump) and AG-F (10ml/pump) in the first spray. The results were immediate and powerful! My plot is now considered the best plot in the area. The soybean plants show exceptional, vigorous growth and height, with outstanding branching (फुटवा) starting right from the base. This combination gave my crop the best possible start. If you want the best growth for your soybean, you must try Golden Drop and AG-F!",
    regional: "माझ्या २८ ते ३० दिवसांच्या सोयाबीन पिकावर, मी पहिल्या फवारणीत गोल्डन ड्रॉप (६ मिली/पंप) आणि AG-F (१० मिली/पंप) चा वापर केला. याचे परिणाम लगेच आणि खूप प्रभावी दिसले! माझा प्लॉट आता परिसरातील 'सर्वोत्कृष्ट प्लॉट' म्हणून ओळखला जातो. सोयाबीनच्या झाडांना उत्कृष्ट, जोमदार वाढ आणि उंची मिळाली आहे, तसेच तळापासून फुटवे (branching) मोठ्या प्रमाणात निघाले आहेत. या संयोगाने माझ्या पिकाला सर्वोत्तम सुरुवात दिली. जर तुम्हाला तुमच्या सोयाबीन पिकासाठी उत्कृष्ट वाढ हवी असेल, तर गोल्डन ड्रॉप आणि AG-F चा वापर नक्की करा!",
    image: "/tanajitesti.jpg"
  },

  {
    id: 9,
    name: "Mr. Ramanna Gowda",
    location: "Karnataka",
    crop: "Paddy (Rice) & Vegetables",
    productUsed: "Golden Drop, AG-F, Crop Giant",
    shortText:
      "I have seen tremendous change since I started using the Palm product range.",
    english: "I have seen tremendous change since I started using the Palm product range. AG-F is a must-have; it boosts the performance of all my sprays and helps keep my input costs low. The combination of Golden Drop and Crop Giant on my vegetables and paddy is truly fantastic.Golden Drop gives the plants a powerful start and ensures maximum flowering and fruit set. For my final produce, Crop Giant is key—it guarantees excellent size, firmness, and shelf life, which directly results in higher profits at the market. My soil health and overall yield have definitely improved by over 20% with these products!",
    regional: "ಉತ್ಪನ್ನಗಳು: ಗೋಲ್ಡನ್ ಡ್ರಾಪ್ (Golden Drop), ಎಜಿ-ಎಫ್ (AG-F), ಕ್ರಾಪ್ ಜೈಂಟ್ (Crop Giant)ನಾನು ಪಾಮ್ ಉತ್ಪನ್ನಗಳ ಶ್ರೇಣಿಯನ್ನು ಬಳಸಲು ಪ್ರಾರಂಭಿಸಿದ ನಂತರ ನನ್ನ ಕೃಷಿಯಲ್ಲಿ ಭಾರಿ ಬದಲಾವಣೆಯನ್ನು ನೋಡಿದ್ದೇನೆ. ಎಜಿ-ಎಫ್ (AG-F) ಒಂದು ಅತ್ಯಗತ್ಯ ಉತ್ಪನ್ನವಾಗಿದೆ; ಇದು ನನ್ನ ಎಲ್ಲಾ ಸಿಂಪಡಣೆಗಳ (Sprays) ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಇನ್‌ಪುಟ್ ವೆಚ್ಚವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ನನ್ನ ತರಕಾರಿ ಮತ್ತು ಭತ್ತದ ಬೆಳೆಗಳಿಗೆ ಗೋಲ್ಡನ್ ಡ್ರಾಪ್ ಮತ್ತು ಕ್ರಾಪ್ ಜೈಂಟ್ ಸಂಯೋಜನೆಯು ನಿಜಕ್ಕೂ ಅದ್ಭುತವಾಗಿದೆ.ಗೋಲ್ಡನ್ ಡ್ರಾಪ್ ಸಸ್ಯಗಳಿಗೆ ಬಲವಾದ ಆರಂಭವನ್ನು ನೀಡುತ್ತದೆ ಮತ್ತು ಗರಿಷ್ಠ ಹೂಬಿಡುವಿಕೆ ಹಾಗೂ ಉತ್ತಮ ಕಾಯಿ ಕಚ್ಚುವಿಕೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ. ಅಂತಿಮ ಉತ್ಪನ್ನಕ್ಕಾಗಿ ಕ್ರಾಪ್ ಜೈಂಟ್ ಬಹಳ ಮುಖ್ಯ—ಇದು ಅತ್ಯುತ್ತಮ ಗಾತ್ರ, ಗಡಸುತನ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಶೆಲ್ಫ್ ಲೈಫ್ ಅನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ, ಇದರಿಂದ ನನಗೆ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಹೆಚ್ಚಿನ ಲಾಭ ದೊರೆಯುತ್ತದೆ. ಈ ಉತ್ಪನ್ನಗಳಿಂದ ನನ್ನ ಇಳುವರಿ ಖಂಡಿತವಾಗಿಯೂ 20% ಕ್ಕಿಂತ ಹೆಚ್ಚು ಸುಧಾರಿಸಿದೆ!",
    image: "/ramanatesti.jpg"
  },

  {
    id: 10,
    name: "Mr. Basavaraj Patil",
    location: "Jamkhandi, Karnataka",
    productUsed: "Palm Sulf (100% Organic liquid Sulfur)",
    shortText:
      "I have seen tremendous change since I started using the Palm product range.",
    english: "For years, achieving a top-quality raisin batch was a challenge, especially with pests and maintaining the perfect golden color. Since using Palm Sulf, my results have been truly premium.Palm Sulf not only effectively controlled Mites and prevented fungal issues but also played a crucial role in improving the final quality. It ensured the grapes were healthy, leading to better color consistency and uniform drying. The result, as you can see, is a premium, residue-free product that fetches the highest price in the market. Palm Sulf is essential for any serious raisin producer!",
    regional: "ವರ್ಷಗಳಿಂದ, ದ್ರಾಕ್ಷಿಯಲ್ಲಿ ಕೀಟಗಳ ನಿಯಂತ್ರಣ ಮತ್ತು ಪರಿಪೂರ್ಣ ಚಿನ್ನದ ಬಣ್ಣವನ್ನು (golden color) ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಒಂದು ಸವಾಲಾಗಿತ್ತು. ಪಾಮ್ ಸಲ್ಫ್ ಬಳಸಿದ ನಂತರ, ನನ್ನ ಫಲಿತಾಂಶಗಳು ನಿಜವಾಗಿಯೂ ಉತ್ತಮವಾಗಿವೆ.ಪಾಮ್ ಸಲ್ಫ್ ಕೀಟಗಳನ್ನು (Mites) ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನಿಯಂತ್ರಿಸುತ್ತದೆ ಮತ್ತು ಶಿಲೀಂಧ್ರ ರೋಗಗಳನ್ನು ತಡೆಯುತ್ತದೆ. ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿ, ಇದು ಉತ್ತಮವಾದ ಬಣ್ಣ ಸ್ಥಿರತೆ ಮತ್ತು ಏಕರೂಪದ ಒಣಗುವಿಕೆಗೆ (uniform drying) ಕಾರಣವಾಯಿತು. ಇದರ ಫಲಿತಾಂಶವಾಗಿ, ನಾನು ಉತ್ತಮ ಗುಣಮಟ್ಟದ, ಶೇಷ-ಮುಕ್ತ ಉತ್ಪನ್ನವನ್ನು ಪಡೆದಿದ್ದೇನೆ, ಅದು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಅತ್ಯಧಿಕ ಬೆಲೆಯನ್ನು ತರುತ್ತದೆ. ಪ್ರತಿ ಒಣ ದ್ರಾಕ್ಷಿ ಉತ್ಪಾದಕರಿಗೆ ಪಾಮ್ ಸಲ್ಫ್ ಒಂದು ಅತ್ಯಗತ್ಯ ಉತ್ಪನ್ನವಾಗಿದೆ!",
    image: "/basavrajtesti.jpg"
  }

];

export function Testimonials() {
  const [modalTestimonial, setModalTestimonial] = useState<Testimonial | null>(null);
  const [isRunning, setIsRunning] = useState(true);

  const CARD_WIDTH = 320;
  const GAP = 24;
  const STEP = CARD_WIDTH + GAP;
  const count = testimonials.length;
  const doubled = useMemo(() => [...testimonials, ...testimonials], []);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);
  const loopWidthRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);
  const manualAnimatingRef = useRef<boolean>(false);

  const SPEED_PX_PER_SEC = 80;

  const openModal = (t: Testimonial) => {
    setModalTestimonial(t);
    setIsRunning(false);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModalTestimonial(null);
    setIsRunning(true);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const items = track.querySelectorAll<HTMLElement>(".testimonial-item");
      const secondStart = items[count];
      if (secondStart) {
        loopWidthRef.current = secondStart.offsetLeft;
      } else {
        loopWidthRef.current = count * (CARD_WIDTH + GAP);
      }
    };

    measure();
    const t = setTimeout(measure, 200);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [count]);

  const applyTransform = (offsetPx: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${-offsetPx}px, 0, 0)`;
  };

  useEffect(() => {
    lastRef.current = performance.now();

    const tick = (now: number) => {
      const track = trackRef.current;
      if (!track) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const last = lastRef.current ?? now;
      const dt = (now - last) / 1000;
      lastRef.current = now;

      if (isRunning && !manualAnimatingRef.current) {
        const delta = SPEED_PX_PER_SEC * dt;
        let next = offsetRef.current + delta;
        const loopPoint = loopWidthRef.current || count * (CARD_WIDTH + GAP);

        if (next >= loopPoint) next -= loopPoint;

        offsetRef.current = next;
        applyTransform(next);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isRunning, count]);

  useEffect(() => {
    applyTransform(offsetRef.current);
  }, []);

  const moveByStep = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    setIsRunning(false);
    manualAnimatingRef.current = true;

    const loopPoint = loopWidthRef.current || count * (CARD_WIDTH + GAP);
    const delta = direction === "left" ? -STEP : STEP;
    let target = offsetRef.current + delta;

    while (target < 0) target += loopPoint;
    while (target >= loopPoint) target -= loopPoint;

    track.style.transition = "";
    applyTransform(offsetRef.current);
    track.offsetHeight;
    track.style.transition = "transform 420ms cubic-bezier(.22,.9,.26,1)";

    const directDist = Math.abs(target - offsetRef.current);
    const wrapDist = loopPoint - directDist;
    let visualTarget = target;
    if (wrapDist < directDist) {
      if (target > offsetRef.current) {
        visualTarget = target - loopPoint;
      } else {
        visualTarget = target + loopPoint;
      }
    }

    applyTransform(visualTarget);

    const onTransEnd = () => {
      track.removeEventListener("transitionend", onTransEnd);
      track.style.transition = "";
      offsetRef.current = target;
      applyTransform(offsetRef.current);
      manualAnimatingRef.current = false;
      setIsRunning(true);
    };

    track.addEventListener("transitionend", onTransEnd);

    window.setTimeout(() => {
      if (manualAnimatingRef.current) {
        track.removeEventListener("transitionend", onTransEnd);
        track.style.transition = "";
        offsetRef.current = target;
        applyTransform(offsetRef.current);
        manualAnimatingRef.current = false;
        setIsRunning(true);
      }
    }, 600);
  };

  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#119152]" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-[120px]" />
      </div>

      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">What Farmers Say</h2>
        <p className="text-white/90 max-w-2xl mx-auto mt-2">Real stories from farmers who trust Palm Group.</p>
        <p className="text-white/90 max-w-2xl mx-auto mt-2">(Translated to English)</p>
      </div>

      <div
        ref={wrapperRef}
        className="w-full relative"
        onMouseEnter={() => { setIsRunning(false); }}
        onMouseLeave={() => { if (!manualAnimatingRef.current) setIsRunning(true); }}
      >
        <button
          aria-label="Previous"
          onClick={() => moveByStep("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 p-2 shadow hover:scale-105 transition-transform"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 6L9 12L15 18" stroke="#0f8a4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          aria-label="Next"
          onClick={() => moveByStep("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 p-2 shadow hover:scale-105 transition-transform"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 6L15 12L9 18" stroke="#0f8a4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex items-stretch will-change-transform"
            style={{ gap: `${GAP}px`, padding: "0 1rem" }}
          >
            {doubled.map((t, idx) => {
              const key = `${t.id}-${idx}`;
              return (
                <article
                  key={key}
                  className="testimonial-item card bg-white rounded-2xl shadow-lg flex-shrink-0"
                  style={{ width: CARD_WIDTH }}
                  aria-labelledby={`testi-${key}`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-[#0f8a4c] text-white text-sm px-3 py-1 rounded-xl font-semibold shadow-md max-w-[68%] truncate">
                      {t.location}
                    </div>
                  </div>

                  <div className="p-4 h-[220px] flex flex-col justify-between">
                    <div>
                      <h3 id={`testi-${key}`} className="text-lg md:text-xl font-bold text-[#22543d] mb-2">{t.name}</h3>
                      <p className="text-[#476a4f] italic text-xs md:text-sm">{t.shortText}</p>
                    </div>

                    <div>
                      <button
                        onClick={() => openModal(t)}
                        className="w-full mt-4 inline-block rounded border border-[#119152] px-4 py-2 text-sm font-medium text-[#119152] hover:bg-[#119152] hover:text-white transition-colors"
                        aria-controls="testimonial-modal"
                      >
                        Read more
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow" aria-label="Close">✕</button>

            {/* grid: becomes stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-6">
              {/* Image column */}
              <div className="md:col-span-2 flex items-center justify-center p-4 bg-gray-50">
                <img
                  src={modalTestimonial.image}
                  alt={modalTestimonial.name}
                  className="modal-image"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "58vh", // desktop max height
                    height: "auto",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Text column */}
              <div className="md:col-span-4 p-4 md:p-6 max-h-[78vh] overflow-y-auto">
                <h3 id="modal-title" className="text-lg md:text-2xl font-bold text-[#22543d] mb-2">{modalTestimonial.name}</h3>
                <div className="flex gap-3 mb-4 items-center">
                  <div className="text-sm text-[#4b6b53]"><strong>Location:</strong> {modalTestimonial.location}</div>
                </div>

                {modalTestimonial.crop && <div className="text-sm text-[#4b6b53] mb-2"><strong>Crop:</strong> {modalTestimonial.crop}</div>}
                {modalTestimonial.productUsed && <div className="text-sm text-[#4b6b53] mb-2"><strong>Products Used:</strong> {modalTestimonial.productUsed}</div>}
                {modalTestimonial.application && <div className="text-sm text-[#4b6b53] mb-4"><strong>Application:</strong> {modalTestimonial.application}</div>}

                <div className="prose prose-sm max-w-none text-[#234f35] whitespace-pre-wrap text-sm md:text-base">
                  {modalTestimonial.english && <p className="mt-2">{modalTestimonial.english}</p>}
                  {modalTestimonial.regional && <p className="mt-4">{modalTestimonial.regional}</p>}
                </div>

                <div className="mt-6 text-right">
                  <button onClick={closeModal} className="inline-block rounded bg-[#119152] text-white px-5 py-2 font-medium hover:opacity-95">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .will-change-transform {
          will-change: transform;
        }
        .testimonial-item img { display: block; }

        /* MOBILE ADJUSTMENTS */
        @media (max-width: 768px) {
          /* make the cards narrower on small screens (keeps layout tidy) */
          .testimonial-item { width: ${Math.max(220, CARD_WIDTH - 120)}px !important; }

          /* REDUCED modal image height on mobile (very small) */
          .modal-image {
            max-height: 22vh !important; /* <<-- change this number to increase/decrease mobile image size */
            width: auto !important;
            height: auto !important;
          }

          /* reduce paddings in modal */
          .testimonial-modal-pad { padding: 8px !important; }

          /* shrink modal title a little on small screens */
          .modal-small-title { font-size: 1rem !important; }
        }
      `}</style>
    </section>
  );
}