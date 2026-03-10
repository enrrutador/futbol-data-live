'use client';

import { Trophy, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-primary-400 text-sm font-medium">En vivo ahora</span>
            <span className="text-gray-400 text-sm">• 42 partidos en directo</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Resultados de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Fútbol
            </span>{' '}
            en Tiempo Real
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Sigue todos los partidos en vivo, estadísticas detalladas y tablas de posiciones. 
            La mejor información al instante.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en-vivo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 group"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Ver En Vivo
            </Link>
            <Link
              href="/ligas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-xl transition-all duration-200 border border-dark-600"
            >
              <TrendingUp className="w-5 h-5" />
              Explorar Ligas
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '200+', label: 'Ligas' },
              { value: '50K+', label: 'Partidos/año' },
              { value: '10M+', label: 'Usuarios' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
