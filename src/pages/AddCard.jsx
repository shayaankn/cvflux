import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddCard({ columnId, setData }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    position: "",
    company: "",
    location: "",
    workMode: "remote",
    salaryRange: "",
  });

  function handleAdd() {
    const id = nanoid();

    setData((prev) => ({
      ...prev,
      cards: {
        ...prev.cards,
        [id]: { id, ...form },
      },
      columns: {
        ...prev.columns,
        [columnId]: {
          ...prev.columns[columnId],
          cardIds: [...prev.columns[columnId].cardIds, id],
        },
      },
    }));

    setForm({
      position: "",
      company: "",
      location: "",
      workMode: "remote",
      salaryRange: "",
    });
    setOpen(false);
  }

  if (!open)
    return (
      <button
        onClick={() => setOpen(true)}
        className="mt-3 text-sm text-gray-600 hover:text-black"
      >
        + Add card
      </button>
    );

  return (
    <div className="mt-3 space-y-2">
      <input
        className="w-full p-1 border rounded"
        placeholder="Position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />
      <input
        className="w-full p-1 border rounded"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
      >
        Add
      </button>
    </div>
  );
}
