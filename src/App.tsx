import { Eraser, Plus } from "lucide-react";
import Divider from "./components/Divider/Divider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GameCard from "./components/GameCard/GameCard";

const mockupGames = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  imageUrl: `https://picsum.photos/seed/${i}/225/200`,
  name: `Game Title ${i + 1}`,
  owned: Math.random() > 0.5,
  sessionType: (["sessionShort", "sessionFlex", "sessionLong"] as const)[Math.floor(Math.random() * 3)],
  maxPlayers: Math.floor(Math.random() * 10) + 1,
  likedBy: Array.from({ length: 1 + Math.floor(Math.random() * 5) }).map((_, j) => ({
    src: `https://i.pravatar.cc/150?img=${i * 10 + j}`,
    name: `Player ${j + 1}`,
  })),
  dislikedBy: Array.from({ length: Math.floor(Math.random() * 3) }).map((_, j) => ({
    src: `https://i.pravatar.cc/150?img=${i * 10 + j + 50}`,
    name: `Player ${j + 10}`,
  })),
}));

export default function App() {
  return (
    <main className="flex h-dvh flex-col items-center gap-pag-spacing-800 pb-pag-spacing-800">
      <Header />
      <div className="flex flex-1 gap-pag-spacing-300 overflow-hidden">
        <div className="flex flex-col justify-between">
          <aside className="flex flex-col gap-pag-spacing-300">
            <div className="flex items-center justify-between">
              <h2 className="text-pag-2xl font-bold">Filters</h2>
              <div className="rounded-pag-full bg-pag-bg-secondary p-pag-spacing-50">
                <Eraser size={20} strokeWidth={1} className="text-pag-icon-primary" />
              </div>
            </div>
            <div>
              <div>Session length</div>
              <div>Max players</div>
              <div className="w-[250px]">Players</div>
            </div>
          </aside>
          <footer className="flex flex-col items-center gap-pag-spacing-200">
            <Divider />
            <Footer />
          </footer>
        </div>
        <Divider direction="vertical" />
        <section className="flex w-[1215px] flex-col gap-pag-spacing-300">
          <div className="flex flex-col gap-pag-spacing-100">
            <div className="flex items-center justify-between">
              <h3>32 games with 0 filters and for 2 people</h3>
              <button className="flex items-center rounded-pag-sm bg-pag-bg-accent p-pag-spacing-100 text-pag-md hover:bg-pag-bg-accent-light transition-colors">
                <Plus size={16} strokeWidth={1} />
                Add a game
              </button>
            </div>
            <Divider />
          </div>
          <div
            className="
              -my-pag-spacing-100 -ml-pag-spacing-100 flex-1 overflow-x-hidden overflow-y-auto py-pag-spacing-100
              pl-pag-spacing-75
              [&::-webkit-scrollbar]:w-pag-sizing-50
              [&::-webkit-scrollbar-thumb]:rounded-pag-full [&::-webkit-scrollbar-thumb]:bg-pag-scrollbar-thumb
              [&::-webkit-scrollbar-track]:rounded-pag-full [&::-webkit-scrollbar-track]:bg-pag-scrollbar-track
            "
          >
            <div className="flex flex-wrap gap-pag-spacing-200">
              {mockupGames.map((game) => (
                <GameCard
                  key={game.id}
                  imageUrl={game.imageUrl}
                  name={game.name}
                  owned={game.owned}
                  sessionType={game.sessionType}
                  maxPlayers={game.maxPlayers}
                  likedBy={game.likedBy}
                  dislikedBy={game.dislikedBy}
                />
              ))}
            </div>
          </div>

          <Divider />
        </section>
      </div>
    </main>
  );
}
