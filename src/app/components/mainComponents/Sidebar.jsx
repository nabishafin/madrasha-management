'use client'

import { LayoutDashboard, Database, BarChart3, Zap, HelpCircle, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function Sidebar({ isOpen }) {
    const pathname = usePathname()

    const menuItems = [
        { icon: LayoutDashboard, label: 'ড্যাশবোর্ড', href: '/pages/dashboard' },
        { icon: Database, label: 'সকল ছাত্র', href: '/students' },
        { icon: BarChart3, label: 'হিসাব', href: '/account' },
        { icon: Zap, label: 'পরীক্ষা', href: '/exam' },
        { icon: HelpCircle, label: 'মার্কশিট', href: '/marksheet' },
    ]

    return (
        <aside
            className={cn(
                'bg-gradient-from-emerald-50 to-emerald-100 w-80 h-screen flex flex-col transition-all duration-300 border-r border-emerald-200',
                !isOpen && '-ml-64'
            )}
        >
            {/* Logo */}
            <div className="p-6 border-b border-emerald-200">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <Menu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-emerald-900">দারুল উলুম মাইনুস সুন্নাহ</p>
                        <p className="text-xs text-emerald-700">প্রোটাল সেবা</p>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                                isActive
                                    ? 'bg-emerald-600 text-white shadow-md'
                                    : 'text-emerald-700 hover:bg-emerald-200'
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{item.label}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-emerald-200">
                <div className="flex items-center gap-2 text-xs text-emerald-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>অনলাইন</span>
                </div>
            </div>
        </aside>
    )
}
