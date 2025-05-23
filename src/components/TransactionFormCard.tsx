import React, { useState } from "react";
import Image from "next/image";

interface TransactionFormCardProps {
  onClose: () => void;
}

export function TransactionFormCard({ onClose }: TransactionFormCardProps) {
  const [type, setType] = useState<'income' | 'outcome'>('income');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-md w-[500px] max-w-[90vw] shadow-xl p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-1">Cadastrar transação</h2>
        <form className="flex flex-col gap-4 mt-2">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Nome</label>
            <input id="name" className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-100" placeholder="Nome" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="preco">Preço</label>
            <input id="preco" className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-100" placeholder="Preço" />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border ${type === 'income' ? 'bg-green-100 border-green-400' : 'border-gray-200'} font-medium transition`}
              onClick={() => setType('income')}
            >
              <Image src="/income.png" width={20} height={20} alt="Entrada" /> Entrada
            </button>
            <button
              type="button"
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border ${type === 'outcome' ? 'bg-red-100 border-red-400' : 'border-gray-200'} font-medium transition`}
              onClick={() => setType('outcome')}
            >
              <Image src="/outcome.png" width={20} height={20} alt="Saída" /> Saída
            </button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="categoria">Categoria</label>
            <input id="categoria" className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-100" placeholder="Categoria" />
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
