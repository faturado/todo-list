const Body = ({ notes = [] }) => {
  return (
    <div className="w-full p-4 rounded-2xl border-black border-2">
      <div className="grid grid-cols-4 gap-2">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              className="px-4 py-2 w-40 h-20 flex items-center justify-center rounded-md border-2 border-gray-400 text-white bg-black text-sm"
            >
              {note.text}
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-4 text-center">
            No notes available
          </p>
        )}
      </div>
    </div>
  );
};

export default Body;
