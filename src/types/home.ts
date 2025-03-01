import { ReactNode } from "react"

export type HomeProps = {
  children?: ReactNode
    title?: string
    subtitle?: string
    text?: string
    icon?: ReactNode
    className?: string
    link?: string
}