"use client"

import React, { useMemo, useState, useCallback, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Award, Shield, FileCheck, Leaf, Globe, X, Eye, Share2, Copy } from "lucide-react"

// NOTE: In Next.js, assets placed in /public are served from the root path (e.g. "/IEC.jpg"),
// so you do NOT prefix them with "/public" in the src.

const awards = [
  {
    title: "ISO 9001",
    category: "Quality Management",
    description:
      "International standard for quality management systems, ensuring consistent quality in our products and services.",
    icon: Shield,
    year: "2023",
    issuer: "International Organization for Standardization",
    certificateUrl: "/ISO.jpg",
  },
  {
    title: "IEC Certificate",
    category: "Export Compliance",
    description:
      "Import Export Code certificate enabling us to engage in international trade operations.",
    icon: Globe,
    year: "2023",
    issuer: "Directorate General of Foreign Trade",
    certificateUrl: "/IEC.jpg",
  },
  {
    title: "PPC Drug License",
    category: "Pharmaceutical",
    description:
      "Pharmaceutical Product Certificate for manufacturing and distribution of pharmaceutical products.",
    icon: FileCheck,
    year: "2023",
    issuer: "State Drug Control Authority",
    certificateUrl: "/Drug.jpg",
  },
  {
    title: "Agri- licenses ",
    category: "Agriculture",
    description:
      "Comprehensive licensing for manufacturing and distribution of agricultural products and fertilizers.",
    icon: Leaf,
    year: "2023",
    issuer: "Department of Agriculture",
    certificateUrl: "/Agri.jpg",
  },
  {
    title: "RCMC",
    category: "Export Promotion",
    description:
      "Registration-cum-Membership Certificate from Export Promotion Council for international trade.",
    icon: Award,
    year: "2023",
    issuer: "Export Promotion Council",
    certificateUrl: "/RCMC.jpg",
  },
]

// Top hero section (renamed to CertificationsHero and heading updated)
export function CertificationsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Full-width wavey green header */}
      <div className="absolute top-0 left-0 w-full h-50">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Main green wave */}
          <path
            d="M0,200 Q160,100 820,200 T1440,200 L1440,0 L0,0 Z"
            fill="#059c5b"
          />
          {/* Optional darker overlay for depth */}
          <path
            d="M0,200 Q180,140 720,240 T1440,240 L1440,0 L0,0 Z"
            fill="#19703d"
            opacity="0.8"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-12 pb-24">
        <h1 className="text-4xl mid:text-6xl font-bold text-white">
          Certifications
        </h1>
      </div>
    </section>
  );
}

export default function AwardsGrid() {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // lightweight toast system (no external lib)
  const [toast, setToast] = useState<{ message: string; icon?: React.ReactNode } | null>(null)
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const activeAward = typeof activeIndex === "number" ? awards[activeIndex] : null

  function handleOpen(idx: number) {
    setActiveIndex(idx)
    setOpen(true)
  }

  const baseOrigin = useMemo(() => {
    if (typeof window === "undefined") return ""
    return window.location.origin
  }, [])

  const shareLinkFor = useCallback(
    (award: (typeof awards)[number]) => {
      // Prefer sharing the certificate itself. If you have a dedicated award route, swap this for that URL.
      const url = award.certificateUrl?.startsWith("http")
        ? award.certificateUrl
        : `${baseOrigin}${award.certificateUrl ?? ""}`
      return url
    },
    [baseOrigin]
  )

  const handleShare = useCallback(async (award: (typeof awards)[number]) => {
    const url = shareLinkFor(award)
    const data = { title: award.title, text: `${award.title} • ${award.issuer} (${award.year})`, url }

    try {
      if (navigator.share) {
        await navigator.share(data)
        setToast({ message: "Shared successfully" })
      } else if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url)
        setToast({ message: "Link copied", icon: <Copy className="h-4 w-4" /> })
      } else {
        window.open(url, "_blank")
      }
    } catch (err) {
      // Web Share API throws on user cancel or unsupported environments
      if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url)
        setToast({ message: "Share unavailable • Link copied", icon: <Copy className="h-4 w-4" /> })
      } else {
        setToast({ message: "Sharing failed. Try again." })
      }
    }
  }, [shareLinkFor])

  return (
    <>
      <CertificationsHero />
      <section className="relative py-24 overflow-hidden">
        {/* Background flair: aurora + grid + sparkles */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* soft grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary/10)_1px,transparent_1px)] [background-size:22px_22px]" />
          {/* brand-tinted gradient sheets */}
          <div className="absolute -top-40 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_20%,#11915233,transparent_60%)]" />
          <div className="absolute -bottom-40 right-1/3 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_70%_80%,#0E7C4540,transparent_60%)]" />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon
              return (
                <Card
                  key={award.title}
                  className="group relative overflow-hidden rounded-2xl border-transparent bg-gradient-to-b from-background to-background/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
                >
                  {/* animated border gradient */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity [background:linear-gradient(120deg,_#11915233,_transparent_30%,_transparent_70%,_#11915226)]" />

                  {/* spotlight hover */}
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-0 group-hover:opacity-20 blur-2xl bg-[#119152]/40 transition-opacity" />

                  <CardContent className="relative p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#119152]/10 ring-1 ring-[#119152]/20 transition-colors group-hover:bg-[#119152]/15">
                      <Icon className="h-8 w-8 text-[#119152]" />
                    </div>

                    <Badge variant="secondary" className="mb-3">
                      {award.category}
                    </Badge>

                    <h3 className="text-xl font-bold text-foreground mb-2">{award.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {award.description}
                    </p>

                    <div className="space-y-1">
                      <p className="text-sm font-medium">Issued: {award.year}</p>
                      <p className="text-xs text-muted-foreground">{award.issuer}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-center gap-3">
                      <Button size="sm" onClick={() => handleOpen(index)} className="gap-2">
                        <Eye className="h-4 w-4" /> View certificate
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleShare(award)}
                        className="gap-2"
                      >
                        <Share2 className="h-4 w-4" /> Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Commitment box */}
          <div className="mt-16 text-center">
            <div className="relative mx-auto max-w-4xl rounded-3xl border bg-card/60 p-8 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/50">
              {/* brand accent bar */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0E7C45] to-[#14A165] rounded-t-3xl" />
              <h3 className="text-2xl font-bold mb-3">Our Commitment to Excellence</h3>
              <p className="text-muted-foreground">
                At Palm Group, certifications aren’t just documents—they’re a promise. Each recognition validates our focus
                on quality, safety, and regulatory compliance, ensuring our partners receive world‑class products and
                service.
              </p>
            </div>
          </div>
        </div>

        {/* Toast */}
        {toast && (
          <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center">
            <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border bg-background/90 px-4 py-2 text-sm shadow-lg backdrop-blur">
              {toast.icon}
              <span>{toast.message}</span>
            </div>
          </div>
        )}

        {/* Dialog for certificate preview */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-3xl p-0">
            <DialogHeader className="px-6 pt-6">
              <DialogTitle className="text-[#119152]">{activeAward?.title}</DialogTitle>
              <DialogDescription>
                {activeAward?.issuer} • Issued {activeAward?.year}
              </DialogDescription>
            </DialogHeader>

            <div className="px-6 pb-2">
              {activeAward?.certificateUrl ? (
                <div className="overflow-hidden rounded-lg border">
                  {/* If you use Next/Image, replace with <Image fill /> inside a relative container */}
                  <ScrollArea className="h-[60vh] w-full">
                    <img
                      src={activeAward.certificateUrl}
                      alt={`${activeAward.title} certificate`}
                      className="w-full h-auto"
                    />
                  </ScrollArea>
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center rounded-lg border bg-muted/30 text-muted-foreground">
                  Certificate preview coming soon
                </div>
              )}
            </div>

            <DialogFooter className="px-6 pb-6 gap-3 sm:gap-2">
              {activeAward?.certificateUrl && (
                <Button
                  onClick={() => {
                    const url = activeAward.certificateUrl.startsWith("http")
                      ? activeAward.certificateUrl
                      : `${baseOrigin}${activeAward.certificateUrl}`
                    window.open(url, "_blank")
                  }}
                >
                  Open in new tab
                </Button>
              )}
              <DialogClose asChild>
                <Button variant="outline" className="gap-2">
                  <X className="h-4 w-4" /> Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </>
  )
}

// For compatibility with named imports like: import { AwardsGrid } from "./awards-grid"
export { AwardsGrid }
