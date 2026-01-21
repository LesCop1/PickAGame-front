import VerdictItem from "./components/VerdictItem/VerdictItem";

export default function App() {
  return (
    <div className="flex flex-col gap-pag-sizing-25">
      <span>App.tsx</span>
      <VerdictItem interested={true} src="https://mathisengels.fr/og-image.webp" value="Mathis Engels" />
      <VerdictItem
        interested={true}
        achievementsProgress={75}
        src="https://mathisengels.fr/og-image.webp"
        value="Mathis Engels"
      />

      <VerdictItem interested={false} src="https://mathisengels.fr/og-image.webp" value="Mathis Engels" />
      <VerdictItem
        interested={false}
        achievementsProgress={75}
        src="https://mathisengels.fr/og-image.webp"
        value="Mathis Engels"
      />
    </div>
  );
}
