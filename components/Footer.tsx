import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">CA</span>
              </div>
              CONCEPT ACADEMY
            </h3>
            <p className="text-sm leading-relaxed">
              Building foundations of practical, experimental, and research-based knowledge for students from Class 1 to 12.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/classes" className="hover:text-blue-400 transition">Classes</Link></li>
              <li><Link href="/subjects" className="hover:text-blue-400 transition">Subjects</Link></li>
              <li><Link href="/study-materials" className="hover:text-blue-400 transition">Study Materials</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tests" className="hover:text-blue-400 transition">Test Series</Link></li>
              <li><Link href="/labs" className="hover:text-blue-400 transition">Virtual Labs</Link></li>
              <li><Link href="/research" className="hover:text-blue-400 transition">Research Zone</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@conceptacademy.org" className="hover:text-blue-400 transition">
                  info@conceptacademy.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Linkedin size={20} /></a>
            </div>
            <p className="text-sm text-center md:text-right">
              © 2024 CONCEPT ACADEMY. All rights reserved. | 
              <Link href="/privacy" className="hover:text-blue-400 transition ml-2">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-blue-400 transition ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
