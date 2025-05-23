"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TransactionFormCard } from "@/components/TransactionFormCard";

export function Header() {
  const [showForm, setShowForm] = useState(false);
  return (
    <header className="bg-header w-full h-[212px]">
      <div className="max-w-[1120px] mx-auto flex row justify-between pt-8">
        <Image src="/logo.png" width={172} height={40} alt="Logo Image" />
        <button
          className="bg-button text-white px-8 py-3 rounded-md hover:opacity-80"
          onClick={() => setShowForm(true)}
        >
          Nova transação
        </button>
      </div>
      {showForm && (
        <TransactionFormCard onClose={() => setShowForm(false)} />
      )}
    </header>
  );
}