'use client';

import Link from 'next/link';
// components/Header.tsx
import { usePathname } from 'next/navigation';
import { ThemeToggler } from '@/components/animate-ui/components/buttons/theme-toggler';

export default function Header() {
  const pathname = usePathname();
    return (
        <header className="bg-gradient-to-b from-black/60 to-transparent
backdrop-blur-sm">   {/* ← key change */}
        <header className="bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">   {/* ← key change */}
            <div className="container mx-auto flex justify-between items-center py-6">
                <h1 className="text-2xl font-bold">My App</h1>
                <nav>
@@ -12,6 +16,7 @@ backdrop-blur-sm">   {/* ← key change */}
                        <li><Link href="/about" className="hover:underline">About</Link></li>
                        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="/blog" className="hover:underline">Blogs</Link></li>
                        <ThemeToggler />
                    </ul>
                </nav>
            </div>
