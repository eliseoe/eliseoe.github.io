import { Link, useParams } from "react-router-dom";
import { profile, recipeBySlug } from "../siteContent";

const RecipePage = () => {
  const { slug } = useParams();
  const recipe = slug ? recipeBySlug[slug] : undefined;

  if (!recipe) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-phase-bg px-4 text-phase-text">
        <div className="max-w-lg text-center">
          <p className="mb-4 font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">Recipe Not Found</p>
          <h1 className="mb-6 font-serif-theme text-4xl">This page drifted out of the attractor.</h1>
          <Link to="/" className="font-mono-theme text-sm text-phase-teal hover:text-phase-warm">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-phase-bg px-4 py-10 text-phase-text sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <Link to="/#personal" className="font-mono-theme text-xs uppercase tracking-[0.25em] text-phase-teal hover:text-phase-warm">
            ← Back to recipes
          </Link>
        </div>

        <article className="rounded-[2rem] border border-phase-ghost/20 bg-phase-surface/40 p-6 sm:p-8 md:p-10">
          <p className="mb-4 font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-warm">{recipe.tag}</p>
          <h1 className="mb-4 font-serif-theme text-4xl leading-tight sm:text-5xl">{recipe.name}</h1>
          <p className="mb-6 font-mono-theme text-xs uppercase tracking-[0.2em] text-phase-text-dim">{recipe.date}</p>
          <p className="max-w-2xl text-base leading-relaxed text-phase-text-dim/85">{recipe.description ?? recipe.note}</p>

          {recipe.image ? (
            <img src={recipe.image} alt={recipe.name} className="my-8 h-auto w-full rounded-[1.5rem] object-cover" />
          ) : null}

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <section>
              <h2 className="mb-5 font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">Ingredients</h2>
              <ul className="space-y-3 text-sm leading-relaxed text-phase-text-dim/85">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="rounded-2xl border border-phase-ghost/15 px-4 py-3">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-5 font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">Method</h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-phase-teal/10 font-mono-theme text-xs text-phase-teal">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-phase-text-dim/85">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {recipe.equipment?.length ? (
            <section className="mt-10">
              <h2 className="mb-5 font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-teal">Equipment</h2>
              <div className="flex flex-wrap gap-3">
                {recipe.equipment.map((item) => (
                  <span key={item} className="rounded-full border border-phase-ghost/20 px-4 py-2 text-sm text-phase-text-dim/85">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ) : null}

          {recipe.comments ? (
            <section className="mt-10 border-t border-phase-ghost/15 pt-8">
              <h2 className="mb-4 font-mono-theme text-xs uppercase tracking-[0.3em] text-phase-warm">Notes</h2>
              <p className="text-sm leading-relaxed text-phase-text-dim/85">{recipe.comments}</p>
            </section>
          ) : null}
        </article>

        <footer className="mt-8 text-center font-mono-theme text-xs text-phase-text-dim/40">
          {profile.name}
        </footer>
      </div>
    </div>
  );
};

export default RecipePage;
