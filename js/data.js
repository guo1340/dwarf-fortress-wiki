window.WikiData = {
  site: {
    name: 'Dwarf Fortress Wiki',
    shortName: 'Dwarf Fortress Wiki',
    baseUrl: 'https://dwarffortress.gamewikihub.com',
    titleSuffix: 'Dwarf Fortress Wiki',
    defaultDescription: 'A practical Dwarf Fortress wiki for beginner guides, fortress design, industry chains, military systems, creatures, world generation, adventure mode, mods and DFHack.',
    defaultOgImage: '/assets/images/hero/homepage-hero.svg',
    lastUpdated: '2026-05-24',
    buildStatus: 'Steam and Classic guidance; verify exact mechanics against your game version.'
  },

  sourceRegistry: {
    bay12: { label: 'Bay 12 Games', url: 'https://www.bay12games.com/dwarves/', note: 'Official Dwarf Fortress source and developer updates.' },
    steam: { label: 'Dwarf Fortress Steam Page', url: 'https://store.steampowered.com/app/975370/Dwarf_Fortress/', note: 'Official Steam release and feature overview.' },
    communityWiki: { label: 'Dwarf Fortress Wiki', url: 'https://dwarffortresswiki.org/', note: 'Community mechanics reference for systems, items and creatures.' },
    dfhack: { label: 'DFHack Documentation', url: 'https://docs.dfhack.org/', note: 'Primary reference for DFHack tools, commands and automation.' }
  },

  categories: [
    { id: 'beginner-guide', title: 'Beginner Guide', icon: 'mug', summary: 'Steam setup, first fortress tutorials, starter layouts and beginner mistakes.' },
    { id: 'fortress', title: 'Fortress', icon: 'fortress', summary: 'Bedrooms, taverns, temples, libraries, hospitals, justice, nobility and fortress design.' },
    { id: 'industry', title: 'Industry', icon: 'anvil', summary: 'Farming, brewing, cooking, mining, smithing, soap, glass, cloth, leather and trade.' },
    { id: 'military', title: 'Military', icon: 'shield', summary: 'Squads, weapons, armor, defenses, sieges, war animals and megaproject weapons.' },
    { id: 'creatures', title: 'Creatures', icon: 'dragon', summary: 'Civilized races, underground creatures, forgotten beasts, titans, necromancers and werebeasts.' },
    { id: 'world', title: 'World', icon: 'mountain', summary: 'World generation, biomes, caverns, magma, aquifers, weather and climate.' },
    { id: 'adventure-mode', title: 'Adventure Mode', icon: 'sword', summary: 'Character creation, combat, survival, quests, exploration and companions.' },
    { id: 'mods', title: 'Mods & DFHack', icon: 'gear', summary: 'Best mods, Steam Workshop, graphics packs, DFHack installation and commands.' },
    { id: 'guides', title: 'Guides', icon: 'scroll', summary: 'High-traffic guides for tantrums, steel, embark, food, military, FPS and engineering.' },
    { id: 'blueprints', title: 'Blueprints', icon: 'grid', summary: 'Fortress layouts, industry layouts, defense patterns and megaproject inspiration.' },
    { id: 'updates', title: 'Updates', icon: 'horn', summary: 'Steam update summaries, patch notes, dev diary summaries and roadmap watchpoints.' }
  ],

  pages: [
    article('beginner-guide', 'getting-started', 'Getting Started', 'Set up Dwarf Fortress with sensible defaults before the simulation starts asking hard questions.', ['Steam vs Classic version', 'Initial settings', 'World size', 'Embark settings', 'UI overview']),
    article('beginner-guide', 'first-fortress-tutorial', 'First Fortress Tutorial', 'Your first fortress needs food, drink, beds, stockpiles and a plan for not freezing into chaos.', ['Embark selection', 'Digging first rooms', 'Beds', 'Food setup', 'Basic defenses']),
    article('beginner-guide', 'common-beginner-mistakes', 'Common Beginner Mistakes', 'Most fortress collapses begin as small logistical omissions.', ['No alcohol', 'No food storage', 'No military', 'Cave-ins', 'Tantrum spirals']),
    article('beginner-guide', 'beginner-layouts', 'Beginner Fortress Layouts', 'A clear starter layout prevents hauling chaos and makes later expansion less painful.', ['Compact layout', 'Mountain fortress', 'Surface fortress', 'Stockpile flow', 'Starter blueprints']),
    article('beginner-guide', 'steam-vs-classic', 'Steam vs Classic Version', 'Steam and Classic share the simulation, but interface and setup expectations differ.', ['Premium graphics', 'Classic ASCII', 'Controls', 'Mod support', 'Learning curve']),

    article('fortress', 'fortress-design', 'Fortress Design', 'A fortress is a machine for routing dwarves, goods, danger and happiness.', ['Vertical layouts', 'District systems', 'Industry wings', 'Secure vaults', 'Barracks']),
    article('fortress', 'bedrooms-happiness', 'Bedrooms and Happiness', 'Good rooms are not decoration. They are stress control infrastructure.', ['Room value', 'Furniture quality', 'Engravings', 'Stress reduction', 'Noble demands']),
    article('fortress', 'tavern-systems', 'Tavern Systems', 'Taverns bring morale, stories, visitors and the occasional interesting security problem.', ['Tavern keepers', 'Visitors', 'Bards', 'Mercenaries', 'Monster slayers']),
    article('fortress', 'temple-systems', 'Temple Systems', 'Temples keep faith from becoming stress, petitions and fortress-wide grumbling.', ['Religions', 'Multi-faith temples', 'Priests', 'Petitions', 'Value']),
    article('fortress', 'libraries', 'Libraries', 'Libraries turn a fortress into a scholarly engine with books, scribes and visitors.', ['Scholars', 'Books', 'Scribes', 'Knowledge spread', 'Research']),
    article('fortress', 'hospitals', 'Hospitals', 'A hospital without soap, thread and crutches is mostly a room where dwarves wait badly.', ['Doctors', 'Soap', 'Sutures', 'Crutches', 'Recovery rooms']),
    article('fortress', 'justice-system', 'Justice System', 'Justice can stabilize a fortress or turn mandates into an internal disaster.', ['Sheriff', 'Captain of the guard', 'Prisons', 'Hammerer', 'Crime mechanics']),
    article('fortress', 'nobility', 'Nobility', 'Nobles bring value, mandates and increasingly specific architectural headaches.', ['Baron', 'Count', 'Duke', 'Monarch', 'Demands']),

    article('industry', 'farming', 'Farming Guide', 'Farming is the base layer of food, drink, cloth and survival.', ['Plump helmets', 'Surface farming', 'Underground farming', 'Fertilizer', 'Crop planning']),
    article('industry', 'brewing', 'Brewing Guide', 'A fortress without alcohol is a fortress writing its own obituary.', ['Still setup', 'Booze chains', 'Plant stockpiles', 'Barrels', 'Tavern supply']),
    article('industry', 'cooking', 'Cooking Guide', 'Prepared meals create value, mood support and trade goods when the pantry is organized.', ['Kitchens', 'Prepared meals', 'Ingredient control', 'Seeds', 'Trade value']),
    article('industry', 'smithing', 'Smithing Guide', 'Smithing turns ore, fuel and patience into military survival.', ['Weaponsmithing', 'Armorsmithing', 'Metals', 'Furnaces', 'Fuel systems']),
    article('industry', 'mining', 'Mining Guide', 'Mining is progress, danger and structural responsibility in the same pick stroke.', ['Ore layers', 'Gems', 'Mining safety', 'Cavern breaches', 'Channeling']),
    article('industry', 'stoneworking', 'Stoneworking', 'Stone is furniture, blocks, mechanisms, traps and fortress identity.', ['Blocks', 'Furniture', 'Mechanisms', 'Work orders', 'Stockpiles']),
    article('industry', 'cloth-industry', 'Cloth Industry', 'Cloth production prevents naked misery and supports hospitals, trade and uniforms.', ['Pig tails', 'Looms', 'Dyers', 'Clothing', 'Thread']),
    article('industry', 'leather-industry', 'Leather Industry', 'Leather is armor, bags, waterskins and the useful end of animal processing.', ['Tanneries', 'Hunting', 'Butchering', 'Leather armor', 'Bags']),
    article('industry', 'glass-industry', 'Glass Industry', 'Glassmaking turns sand and fuel into crafts, windows, traps and magma economy.', ['Green glass', 'Crystal glass', 'Sand collection', 'Furnaces', 'Magma glass']),
    article('industry', 'soap-industry', 'Soap Industry', 'Soap is the small industry that makes healthcare much less tragic.', ['Lye', 'Ashery', 'Fat rendering', 'Soap maker', 'Hospital use']),
    article('industry', 'trade-depot', 'Trade Depot', 'The trade depot is where fortress surplus becomes steel, food, livestock and diplomatic leverage.', ['Caravans', 'Broker', 'Export strategies', 'Weight', 'Profit']),
    article('industry', 'steel-production', 'How Steel Production Works', 'Steel is the iconic Dwarf Fortress industry chain because every step matters.', ['Iron bars', 'Pig iron', 'Flux stone', 'Fuel', 'Smelters']),
    article('industry', 'industry-chains', 'Industry Chains', 'Industrial success comes from connecting workshops, materials and work orders into stable loops.', ['Steel chain', 'Clothing chain', 'Soap chain', 'Glass chain', 'Crossbow chain']),

    article('military', 'squad-setup', 'Squad Setup', 'A militia that exists only after the siege starts is a memorial project.', ['Squad organization', 'Training schedules', 'Equipment assignment', 'Barracks', 'Alerts']),
    article('military', 'weapons', 'Weapons', 'Weapon choice should match material access, enemy type and training plan.', ['Axes', 'Spears', 'Swords', 'Crossbows', 'Hammers']),
    article('military', 'armor', 'Armor', 'Armor quality and material can decide whether a soldier becomes a veteran or a name on a slab.', ['Material comparison', 'Layering', 'Metal quality', 'Uniforms', 'Coverage']),
    article('military', 'defenses', 'Defenses', 'Defenses buy time, shape enemy movement and reduce how often heroism is required.', ['Drawbridges', 'Traps', 'Moats', 'Kill corridors', 'Fortifications']),
    article('military', 'sieges', 'Sieges', 'Sieges test logistics first and bravery second.', ['Goblin invasions', 'Titan attacks', 'Forgotten beasts', 'Burrows', 'Lockdown']),
    article('military', 'war-animals', 'War Animals', 'Animals can scout, screen, bite and die usefully if trained and placed well.', ['Dogs', 'War bears', 'Animal training', 'Pastures', 'Handlers']),
    article('military', 'megaproject-defenses', 'Megaproject Defenses', 'Lava moats and atom smashers are engineering answers to military questions.', ['Lava moats', 'Atom smashers', 'Minecart weapons', 'Floodgates', 'Failure modes']),

    article('creatures', 'civilized-races', 'Civilized Races', 'Civilized races shape trade, diplomacy, sieges and the stories your world generates.', ['Dwarves', 'Humans', 'Elves', 'Goblins', 'Diplomacy']),
    article('creatures', 'underground-creatures', 'Underground Creatures', 'Cavern life is resource, threat and warning system.', ['Cave spiders', 'Troglodytes', 'Crundles', 'Cavern layers', 'Webs']),
    article('creatures', 'forgotten-beasts', 'Forgotten Beasts', 'Forgotten beasts are procedural boss fights with physics, poison and bad timing.', ['Materials', 'Syndromes', 'Webs', 'Dusts', 'Counter strategies']),
    article('creatures', 'titans', 'Titans', 'Titans are world-scale threats that ask whether your defense plan was real.', ['World threats', 'Combat preparation', 'Materials', 'Siege response', 'Burrows']),
    article('creatures', 'necromancers', 'Necromancers', 'Necromancers turn battlefields into recurring problems.', ['Towers', 'Undead armies', 'Corpse control', 'Sieges', 'Quarantine']),
    article('creatures', 'werebeasts', 'Werebeasts', 'Werebeasts punish poor quarantine and unclear hospital security.', ['Infection', 'Moon cycles', 'Isolation', 'Diagnosis', 'Containment']),
    article('creatures', 'dragons', 'Dragons', 'Dragons are rare, legendary and very capable of turning plans into smoke.', ['Fire mechanics', 'Defense', 'Military prep', 'Cages', 'Risk']),

    article('world', 'world-generation', 'World Generation', 'World generation decides the history your fortress inherits before the first pick strikes.', ['History length', 'Erosion', 'Civilization count', 'Beast population', 'Minerals']),
    article('world', 'biomes', 'Biomes', 'Biomes decide climate, plants, animals, evil weather and fortress difficulty.', ['Mountains', 'Deserts', 'Jungles', 'Glaciers', 'Haunted biomes']),
    article('world', 'caverns', 'Caverns', 'Caverns open resources, threats, spores and pathing complications.', ['Cavern layers', 'Flora', 'Fauna', 'Breaching', 'Sealing']),
    article('world', 'magma', 'Magma Guide', 'Magma turns fuel problems into engineering problems.', ['Volcanoes', 'Magma sea', 'Magma forges', 'Pumps', 'Safety']),
    article('world', 'aquifers', 'Aquifer Guide', 'Aquifers are either a nuisance, a water source or a fortress-ending misunderstanding.', ['Light aquifers', 'Heavy aquifers', 'Breaching', 'Pumps', 'Freezing']),
    article('world', 'weather-climate', 'Weather and Climate', 'Weather ranges from scenery to evil rain that rewrites your survival plan.', ['Evil rain', 'Freezing climates', 'Temperature', 'Biome effects', 'Surface risk']),

    article('adventure-mode', 'character-creation', 'Character Creation', 'Adventure mode starts with a person, a goal and many ways to become history.', ['Skills', 'Attributes', 'Starting gear', 'Civilization', 'Roleplay']),
    article('adventure-mode', 'combat-guide', 'Adventure Mode Combat', 'Adventure combat rewards targeting, wrestling, positioning and knowing when to leave.', ['Wrestling', 'Weapon combat', 'Targeted attacks', 'Bleeding', 'Retreat']),
    article('adventure-mode', 'survival', 'Adventure Survival', 'Travel survival depends on food, rest, routes and not picking every fight.', ['Food', 'Travel', 'Inns', 'Water', 'Companions']),
    article('adventure-mode', 'quests-exploration', 'Quests and Exploration', 'Ruins, tombs and towers are story engines with teeth.', ['Ruins', 'Tombs', 'Towers', 'Rumors', 'Maps']),
    article('adventure-mode', 'companions', 'Companion Systems', 'Companions add force, chaos and more bodies to keep alive.', ['Recruiting', 'Party management', 'Equipment', 'Orders', 'Risk']),

    article('mods', 'best-mods', 'Best Mods', 'The best mods improve readability, add variety or smooth fortress management without hiding the simulation.', ['Graphics packs', 'QoL mods', 'Overhauls', 'Compatibility', 'Workshop']),
    article('mods', 'steam-workshop-guide', 'Steam Workshop Guide', 'Workshop modding is easiest when you treat load order and saves with respect.', ['Installing mods', 'Load order', 'Compatibility', 'Save safety', 'Updates']),
    article('mods', 'graphics-packs', 'Graphics Packs', 'Graphics packs change how you read the fortress, not just how it looks.', ['Tilesets', 'ASCII alternatives', 'Readability', 'Steam graphics', 'Classic']),
    article('mods', 'dfhack-installation', 'DFHack Installation', 'DFHack is a toolbox for automation, inspection and controlled mercy.', ['Installation', 'Version matching', 'Launcher', 'Permissions', 'Backups']),
    article('mods', 'dfhack-commands', 'Best DFHack Commands', 'DFHack commands can save time, diagnose problems and ruin discipline if used blindly.', ['cleanowned', 'autolabor', 'workflow', 'fix commands', 'Performance']),
    article('mods', 'performance-optimization', 'Performance Optimization', 'FPS death is an engineering problem with pathing, population and item count at its center.', ['Population caps', 'Pathing', 'Item cleanup', 'Cavern access', 'DFHack tools']),

    article('guides', 'stop-tantrum-spirals', 'How to Stop Tantrum Spirals', 'Tantrum spirals are fortress-wide failures of stress, justice, death and bad timing.', ['Stress sources', 'Burials', 'Mist generators', 'Taverns', 'Justice']),
    article('guides', 'best-fortress-layouts', 'Best Fortress Layouts', 'The best layout reduces hauling, isolates danger and lets industries expand.', ['Central stairs', 'Stockpile rings', 'Industry wings', 'Residential zones', 'Defense layers']),
    article('guides', 'survive-first-winter', 'How to Survive First Winter', 'First winter is a stockpile check disguised as a calendar event.', ['Food', 'Alcohol', 'Bedrooms', 'Fuel', 'Military basics']),
    article('guides', 'best-embark-locations', 'Best Embark Locations', 'A good embark gives you resources, safety and interesting problems in the right order.', ['Flux', 'Trees', 'Water', 'Magma', 'Neighbors']),
    article('guides', 'make-steel', 'How to Make Steel', 'Steelmaking is the industry chain that teaches Dwarf Fortress logistics properly.', ['Iron', 'Flux', 'Pig iron', 'Fuel', 'Work orders']),
    article('guides', 'best-military-setup', 'Best Military Setup', 'A reliable military is trained early, equipped clearly and protected from pathing nonsense.', ['Squads', 'Uniforms', 'Training', 'Alerts', 'Defenses']),
    article('guides', 'fps-optimization', 'FPS Optimization Guide', 'Performance collapses when pathing, creatures, items and temperature get out of hand.', ['Population', 'Pathfinding', 'Items', 'Temperature', 'Caverns']),
    article('guides', 'ultimate-food-guide', 'Ultimate Food Guide', 'Food stability is farms, kitchens, stockpiles, seeds and drink working as one system.', ['Crops', 'Prepared meals', 'Seeds', 'Brewing', 'Storage']),
    article('guides', 'water-engineering', 'Water Engineering Guide', 'Water is life, drowning, wells, power and disaster with one tile of difference.', ['Channels', 'Floodgates', 'Pressure', 'Wells', 'Drainage']),
    article('guides', 'lava-engineering', 'Lava Engineering Guide', 'Lava solves fuel and creates new ways to regret geometry.', ['Magma forges', 'Pumps', 'Channels', 'Safety', 'Moats']),
    article('guides', 'forgotten-beasts', 'How to Handle Forgotten Beasts', 'Forgotten beasts demand identification before heroics.', ['Materials', 'Syndromes', 'Quarantine', 'Military response', 'Cages']),

    article('blueprints', 'starter-fortress', 'Starter Fortress Blueprint', 'A starter fortress should be compact, readable and easy to seal.', ['Central staircase', 'Dormitory', 'Stockpiles', 'Workshops', 'Farm plot']),
    article('blueprints', 'industry-layouts', 'Industry Layouts', 'Industry layouts save hauling time by grouping inputs, workshops and outputs.', ['Food wing', 'Metal wing', 'Textile wing', 'Refuse', 'Trade depot']),
    article('blueprints', 'defense-layouts', 'Defense Layouts', 'Defense layouts turn enemy movement into a solved problem.', ['Drawbridge', 'Trap corridor', 'Fortifications', 'Barracks', 'Burrows']),
    article('blueprints', 'megaproject-examples', 'Megaproject Examples', 'Megaprojects are fortress identity rendered in engineering risk.', ['Magma moat', 'Grand hall', 'Mist generator', 'Minecart network', 'Surface citadel']),

    article('updates', 'patch-notes', 'Patch Notes', 'Patch notes matter because interface, balance and bug fixes reshape fortress management.', ['Steam updates', 'Classic updates', 'Bug fixes', 'Interface changes', 'Compatibility']),
    article('updates', 'dev-diary-summaries', 'Dev Diary Summaries', 'Dev diaries help returning overseers understand where the simulation is headed.', ['Roadmap', 'Adventure mode', 'Interface', 'Systems', 'Mod impact'])
  ],

  tips: [
    'Alcohol is not optional. It is fortress morale in a barrel.',
    'A single central staircase is convenient until it is a highway for disaster.',
    'Do not breach caverns without a way to seal the breach.',
    'A hospital without soap is optimism with beds.',
    'Steel is a logistics exam: ore, flux, fuel and work orders.',
    'Train the militia before the goblins submit the bug report.',
    'FPS death is usually pathing, population, item count or unlocked caverns.'
  ],

  infoPages: {
    about: {
      title: 'About Dwarf Fortress Wiki',
      body: '<p><strong>Dwarf Fortress Wiki</strong> is an unofficial fan-made GameWikiHub archive for players who want practical guidance on fortress management, industry chains, military systems, world generation, adventure mode, mods and DFHack.</p><p>The site is designed as a fast static knowledge base with consistent article templates, internal links, SEO metadata and non-invasive ad placements.</p><h3>Editorial approach</h3><p>Articles are written like a dwarven engineering manual: practical, dense and focused on preventing fortress collapse. Exact mechanics can change between versions, so source notes are included where useful.</p><h3>Unofficial notice</h3><p>This site is not affiliated with, endorsed by, or sponsored by Bay 12 Games or Kitfox Games.</p>'
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      body: '<p><strong>Effective date:</strong> May 24, 2026</p><p>This static wiki does not require user accounts and does not intentionally collect names, passwords, payment information or private account details.</p><h3>Automatically processed information</h3><p>Hosting, analytics, security and advertising providers may process technical information such as IP address, browser type, device type, pages visited, referring pages, approximate location and timestamps.</p><h3>Cookies and advertising</h3><p>This site may use cookies, local storage, analytics tools and advertising providers such as Google AdSense. Advertising partners may use cookies or similar technologies to serve ads, measure performance, prevent fraud and personalize or limit advertising according to user settings and applicable law.</p><h3>Third-party links</h3><p>External links to official resources, stores, community wikis, documentation or mod sites are governed by those sites&apos; own policies.</p><h3>Contact</h3><p>Questions about this policy can be sent through the contact page.</p>'
    },
    contact: {
      title: 'Contact',
      body: '<p>Use this page to report corrections, suggest guide topics, request removals or ask about the Dwarf Fortress Wiki project.</p><h3>Email</h3><p><a href="mailto:contact@gamewikihub.com">contact@gamewikihub.com</a></p><h3>What to include</h3><ul><li>The page URL or title.</li><li>What information is wrong, missing or outdated.</li><li>A source, screenshot, patch note or clear explanation when available.</li></ul><h3>Official support</h3><p>For official support, purchases, bug reports or account issues, contact Bay 12 Games, Kitfox Games or the relevant platform support channel.</p>'
    }
  }
};

function article(category, id, title, summary, points) {
  return {
    category,
    id,
    title,
    summary,
    stats: points,
    sections: [
      { h: 'Quick Summary', body: '<p>' + summary + '</p>' },
      { h: 'Why It Matters', body: '<p>Dwarf Fortress turns small logistical decisions into large fortress outcomes. This topic matters because it affects survival, hauling, morale, defense or long-term production stability.</p>' },
      { h: 'Requirements', list: points },
      { h: 'Step-by-Step Guide', body: '<p>Start with the smallest working version, confirm dwarves can reach every required input, then expand with work orders and stockpiles. Keep dangerous systems isolated until you understand how they fail.</p>' },
      { h: 'Common Mistakes', list: ['Building too far from inputs', 'Ignoring hauling time', 'Forgetting stockpile permissions', 'Expanding before the basic loop works', 'Leaving danger paths unsealed'] },
      { h: 'Optimization Tips', body: '<p>Use compact workshop clusters, clear stair access, manager work orders and dedicated stockpiles. The goal is not elegance for its own sake; it is fewer dwarves hauling the wrong stone across half the mountain.</p>' },
      { h: 'FAQ', list: ['Is this beginner friendly? Yes, if you build the simplest version first.', 'Does it work in Steam and Classic? The system usually does, though interface steps can differ.', 'What should I read next? Follow the related guide links below.'] }
    ],
    related: points.slice(0, 3).map((p) => ({ label: p, href: '/' + category })),
    sources: ['communityWiki', 'bay12']
  };
}
