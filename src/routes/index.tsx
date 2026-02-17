import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import Divider from "../components/Divider/Divider";
import FilterSidebar from "../components/Filters/FilterSidebar";
import Footer from "../components/Footer/Footer";
import GameCard from "../components/GameCard/GameCard";
import Header from "../components/Header/Header";
import { DialogRoot, DialogTrigger } from "../components/Dialog/Dialog";
import UpsertGameDialog from "../components/Dialog/UpsertGameDialog";
import Button from "../components/Button/Button";

export const Route = createFileRoute("/")({
  component: Dashboard,
  beforeLoad: () => {
    const userLogged = true;
    if (!userLogged) {
      throw Route.redirect({
        to: "/login",
      });
    }
  },
});

// Temp mockup data
const mockupGames = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  imageUrl: `https://picsum.photos/seed/${i}/225/200`,
  name: `Game Title ${i + 1}`,
  tags: ["Action", "Adventure", "Multiplayer"].slice(0, Math.floor(Math.random() * 3) + 1),
  priceRetail: `${(Math.random() * 60 + 10).toFixed(2)} €`,
  priceKeyshops: `${(Math.random() * 30 + 5).toFixed(2)} €`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  owned: Math.random() > 0.5,
  sessionType: (["sessionShort", "sessionFlex", "sessionLong"] as const)[Math.floor(Math.random() * 3)],
  maxPlayers: Math.floor(Math.random() * 10) + 1,
  likedBy: Array.from({ length: 1 + Math.floor(Math.random() * 5) }).map((_, j) => ({
    src: `https://i.pravatar.cc/150?img=${i * 10 + j}`,
    name: `Player ${j + 1}`,
  })),
  rating: (Math.random() * 5).toFixed(1),
  achievements: Math.floor(Math.random() * 100),
  dislikedBy: Array.from({ length: Math.floor(Math.random() * 3) }).map((_, j) => ({
    src: `https://i.pravatar.cc/150?img=${i * 10 + j + 50}`,
    name: `Player ${j + 10}`,
  })),
}));

export default function Dashboard() {
  return (
    <>
      <div
        className="

          flex h-dvh flex-col items-center gap-pag-spacing-200 pb-pag-spacing-200

          lg:gap-pag-spacing-800 lg:pb-pag-spacing-800

        "
      >
        <Header />
        <main
          className="

            mx-pag-spacing-200 flex flex-1 gap-pag-spacing-300 overflow-hidden

            lg:mx-pag-spacing-400

          "
        >
          <div
            className="

              hidden flex-col justify-between

              lg:flex

            "
          >
            <FilterSidebar />
            <footer className="flex flex-col items-center gap-pag-spacing-200">
              <Divider />
              <Footer />
            </footer>
          </div>
          <Divider
            direction="vertical"
            className="

              hidden

              lg:block

            "
          />
          <section
            className="

              flex flex-col gap-pag-spacing-200

              lg:gap-pag-spacing-300

            "
          >
            <div className="flex flex-col gap-pag-spacing-100">
              <div className="flex items-center justify-between gap-pag-spacing-100">
                <h3 className="text-pag-md">32 games with 0 filters and for 2 people</h3>

                <DialogRoot>
                  <DialogTrigger asChild>
                    <Button variant="accent" size="sm" className="whitespace-nowrap">
                      <Plus size={16} strokeWidth={1} />
                      Add a game
                    </Button>
                  </DialogTrigger>
                  <UpsertGameDialog />
                </DialogRoot>
              </div>
              <Divider />
            </div>
            <div
              className="

                styled-scrollbar flex-1 overflow-x-hidden overflow-y-auto pr-pag-spacing-200 pl-pag-spacing-75

                lg:-my-pag-spacing-100 lg:-ml-pag-spacing-100 lg:py-pag-spacing-100

              "
            >
              <div className="flex max-w-[1200px] flex-wrap justify-center gap-pag-spacing-200">
                {mockupGames.map((game) => (
                  <GameCard
                    key={game.id}
                    tags={game.tags}
                    priceRetail={game.priceRetail}
                    priceKeyshops={game.priceKeyshops}
                    rating={game.rating}
                    description={game.description}
                    achievements={game.achievements}
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

            <Footer
              className="

                self-center

                lg:hidden

              "
              dir="horizontal"
            />
          </section>
        </main>
      </div>
    </>
  );
}
