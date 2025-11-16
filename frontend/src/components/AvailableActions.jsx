const AvailableActions = ({ actions, onTakeAction, disabled }) => {
  return (
    <div className="bg-white/5 p-4 rounded-xl">
      <h3 className="text-lg font-semibold text-white mb-3">
        📋 Available Evidence
      </h3>
      <div className="flex flex-col gap-3">
        {actions.length === 0 ? (
          <p className="text-center text-gray-400 italic p-5">
            Start investigating to see available clues
          </p>
        ) : (
          actions.map((action) => (
            <div
              key={action.id}
              className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30 hover:translate-x-1 transition-transform duration-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-white text-sm">
                  {action.action}
                </span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                  💰 {action.cost}
                </span>
              </div>
              <button
                onClick={() => onTakeAction(action.id)}
                disabled={disabled}
                className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                🔍 Investigate This
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableActions;
