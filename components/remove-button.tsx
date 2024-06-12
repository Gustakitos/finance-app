"use client"

import { deleteTransaction } from "@/lib/actions";
import Button from "./button";
import { useState } from "react";
import { SizesEnum, VariantsEnum } from "@/lib/constants/constants";

export default function RemoveButton({ id, onRemoved }: { id: string, onRemoved: (id: string) => () => void; }) {
  const [loading, setLoading] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const handleClick = async () => {
    if (!confirmed) {
      setConfirmed(true)
      return
    }
    try {
      setLoading(true)
      await deleteTransaction(id)
      onRemoved(id);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      size={SizesEnum.xs}
      variant={!confirmed ? VariantsEnum.Ghost : VariantsEnum.Danger}
      aria-disabled={loading}
      onClick={handleClick}
    >
      X
    </Button>
  );
}
