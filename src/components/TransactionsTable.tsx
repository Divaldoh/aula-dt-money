import React from "react";

// Você pode importar de '@/components/ui/table' se esses componentes realmente existirem no seu projeto.
// Caso não existam, usaremos elementos HTML padrão para a tabela.

interface Transaction {
  titulo: string;
  preco: string;
  categoria: string;
  data: string;
}

const transactions: Transaction[] = [
  { titulo: "Desenvolvimento de Software", preco: "R$ 12.000,00", categoria: "Salário", data: "13/04/2025" },
  { titulo: "Aluguel", preco: "-R$ 1.200,00", categoria: "Casa", data: "10/04/2025" },
  { titulo: "Mercado", preco: "-R$ 500,00", categoria: "Alimentação", data: "10/05/2025" },
  { titulo: "Freelance", preco: "R$ 800,00", categoria: "Renda Extra", data: "15/05/2025" },
];

export function TransactionsTable() {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-[1120px] bg-white rounded-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#E7E9EE]">
            <tr>
              <th className="px-6 py-3 text-left">Título</th>
              <th className="px-6 py-3 text-left">Preço</th>
              <th className="px-6 py-3 text-left">Categoria</th>
              <th className="px-6 py-3 text-left">Data</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 font-medium">{item.titulo}</td>
                <td className={`px-6 py-4 ${item.preco.trim().startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>{item.preco}</td>
                <td className="px-6 py-4">{item.categoria}</td>
                <td className="px-6 py-4">{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
