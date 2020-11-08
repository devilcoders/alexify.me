// --- Dependencies
import { ReactNode } from 'react'

export type StackType = 'backend' | 'frontend' | 'devops' | 'design'

export type Tech = {
  id: string
  name: string
  url: string
}

export type Company = {
  id: string
  name: string
  url?: string
  logo?: string | ReactNode
}

export type Stack = {
  type: StackType
  tech: Tech[]
}

export type EmploymentPeriod = {
  day?: number
  month?: 'string'
  year?: number
  now?: boolean
}

export type Employment = {
  id: string
  featured?: boolean
  period: EmploymentPeriod
  position: string
  company: Company
  location: string
  employment: string
  description: string
  stack: Stack[]
}
