import { useDraggable } from "@dnd-kit/core";

export default function Card({ card, columnId, setData }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: { columnId },
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  function handleDelete(e) {
    e.stopPropagation();

    setData((prev) => {
      const newCards = { ...prev.cards };
      delete newCards[card.id];

      return {
        ...prev,
        cards: newCards,
        columns: {
          ...prev.columns,
          [columnId]: {
            ...prev.columns[columnId],
            cardIds: prev.columns[columnId].cardIds.filter(
              (id) => id !== card.id
            ),
          },
        },
      };
    });
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-md p-3 shadow flex items-center justify-between"
    >
      {/* Drag handle */}
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab flex-shrink-0 mr-3"
      >
        <i className="bi bi-grip-vertical text-gray-400 text-lg"></i>
      </div>

      {/* Card details */}
      <div className="flex-1">
        <h3 className="font-semibold">{card.position}</h3>
        <p className="text-sm text-gray-600">{card.company}</p>
        <p className="text-xs text-gray-500">
          {card.location} • {card.workMode}
        </p>
        <p className="text-xs mt-1">{card.salaryRange}</p>
      </div>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="flex-shrink-0 text-red-500 hover:text-red-700 ml-3"
      >
        ✕
      </button>
    </div>
  );
}
