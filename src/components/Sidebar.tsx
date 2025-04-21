'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/clientes', label: 'Clientes' },
  { href: '/relatorios', label: 'Relatórios' },
  { href: '/configuracoes', label: 'Configurações' }
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  const handleLogout = async () => {
      await axios.get("/api/logout")
      router.push('/login');
    }

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden h-16 bg-gray-900 border-gray-200 flex items-center justify-between px-4 text-white">
        <button onClick={toggleSidebar}>
          {isOpen ? <IoMdClose size="24" /> : <IoMdMenu size="24" />}
        </button>
        {/* <span className="text-xl font-semibold">Meu Painel</span> */}
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 md:static top-0 left-0 h-screen w-52 bg-gray-900 border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Topo - Menu */}
          <div>
            <div className="h-16 flex items-center justify-center border-b border-gray-600 text-white text-xl font-semibold">
              Menu
            </div>
            <nav className="p-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 rounded hover:bg-orange-600 transition ${
                    pathname === link.href
                      ? 'bg-orange-500 text-orange-100 font-medium'
                      : 'text-gray-100'
                  }`}
                  onClick={closeSidebar}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Fundo - Sair */}
          <div className="p-4 border-t border-gray-600">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded text-white hover:bg-red-600 transition"
            >
              Sair
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
