import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PartidoPage({ params }: PageProps) {
  const { id } = await params;
  
  return (
    <div className="min-h-screen">
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6">
            <ChevronLeft className="w-4 h-4" />
            Inicio
          </Link>
          <h1 className="text-3xl font-bold text-white">Partido {id}</h1>
          <p className="text-slate-400 mt-2">Página de partido en construcción</p>
        </div>
      </div>
    </div>
  );
}
