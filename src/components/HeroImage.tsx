export interface IHeroImageProps {}

export function HeroImage(props: IHeroImageProps) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(./NutE-Hero.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "670px",
        }}
      />
    </div>
  );
}
