//unknown type to avoid runtime errors

const halloweenCostumeIdeas: unknown = ['🧛', '🧟', '🦇', '🛸', '🎃']

halloweenCostumeIdeas.indexOf('🧛');
halloweenCostumeIdeas.a.b.c.d;
halloweenCostumeIdeas();

function randomCostume(ideas: String[]) {
  return ideas[Math.floor(Math.random() * ideas.length)];
}

randomCostume(halloweenCostumeIdeas);