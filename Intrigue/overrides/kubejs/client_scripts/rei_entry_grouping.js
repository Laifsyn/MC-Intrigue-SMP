console.info('Priority 1k')
priority: 1000



onEvent("rei.group", (event) => {
    // This event allows you to add custom entry groups to REI, which can be used to clean up the entry list significantly.
    // As a simple example, we can add a "Swords" group which will contain all (vanilla) swords
    // Note that each group will need an id (ResourceLocation) and a display name (Component / String)
    // event.groupItems("kubejs:rei_groups/swords", "Swords", [
    //     "#c:swords",
    // ]);

    console.info('ABC \n')
    // An easy use case for grouping stuff together could be using tags:
    // In this case, we want all the Hanging Signs and Sign Posts from Supplementaries to be grouped together
    // event.groupItemsByTag("supplementaries:rei_groups/hanging_signs", "Hanging Signs", "supplementaries:hanging_signs");
    let myMainObject_a = {
    inObject_1 : ["intrigue:rei_groups/sign_post", "Sign Posts", "minecraft:signs"], 
    inObject_2 : ["intrigue:rei_groups/broadswords", "Broadswords", "intrigue:broadswords"], 
    inObject_3 : ["intrigue:rei_groups/swords"  , "Swords", "c:swords"], 
    inObject_4 : ["intrigue:rei_groups/pickaxes", "Pickaxes", "c:pickaxes"], 
    inObject_5 : ["intrigue:rei_groups/axes"    , "Axes", "c:axes"], 
    inObject_6 : ["intrigue:rei_groups/shovels" , "Shovels", "c:shovels"], 
    inObject_7 : ["intrigue:rei_groups/hoes"    , "Hoes", "c:hoes"], 
    inObject_8 : ["intrigue:rei_groups/battleaxe"    , "Battleaxe", "intrigue:battleaxe"], 
    inObject_9 : ["intrigue:rei_groups/chalk"    , "Chalk", "intrigue:glow_chalk"], 
    inObject_10 : ["intrigue:rei_groups/glow_chalk", "Glowing Chalk", "intrigue:chalk"], 

    inObject_11 : ["intrigue:rei_groups/concrete_powder", "Concrete Powder", "minecraft:concrete_powder"], 
    inObject_12 : ["intrigue:rei_groups/concrete", "Concrete Block", "minecraft:concrete"], 

    inObject_13 : ["intrigue:rei_groups/special_saplings", "Special Saplings", "intrigue:special_saplings"], 
    inObject_14 : ["intrigue:rei_groups/edenring/portal_mats", "Eden Ring Portal Blocks", "intrigue:edenring/portal_mats"], 
    inObject_15 : ["intrigue:rei_groups/metal_raw_blocks", "Metallic Raw Blocks", "intrigue:metal_raw_blocks"], 
    inObject_16 : ["intrigue:rei_groups/waystones", "Waystones", "intrigue:waystones"], 
    inObject_17 : ["intrigue:rei_groups/woods", "Woods, Barks & Hyphae", "intrigue:woods_hyphae"]
    }

    for (index in myMainObject_a) {
        event.groupItems(myMainObject_a[index][0], myMainObject_a[index][1], [
            `#${myMainObject_a[index][2]}`,
        ]);
    }
    // event.groupItemsByTag("intrigue:rei_groups/sign_post", "Sign Posts", "minecraft:signs");
    // event.groupItemsByTag("intrigue:rei_groups/broadswords", "Broadswords", "intrigue:broadswords");
    // event.groupItemsByTag("intrigue:rei_groups/swords"  , "Swords", "c:swords");
    // event.groupItemsByTag("intrigue:rei_groups/pickaxes", "Pickaxes", "c:pickaxes");
    // event.groupItemsByTag("intrigue:rei_groups/axes"    , "Axes", "c:axes");
    // event.groupItemsByTag("intrigue:rei_groups/shovels" , "Shovels", "c:shovels");
    // event.groupItemsByTag("intrigue:rei_groups/hoes"    , "Hoes", "c:hoes");
    // event.groupItemsByTag("intrigue:rei_groups/battleaxe"    , "Battleaxe", "intrigue:battleaxe");
    // event.groupItemsByTag("intrigue:rei_groups/chalk"    , "Chalk", "intrigue:glow_chalk");
    // event.groupItemsByTag("intrigue:rei_groups/glow_chalk", "Glowing Chalk", "intrigue:chalk");

    // event.groupItemsByTag("intrigue:rei_groups/concrete_powder", "Concrete Powder", "minecraft:concrete_powder");
    // event.groupItemsByTag("intrigue:rei_groups/concrete", "Concrete Block", "minecraft:concrete");

    // event.groupItemsByTag("intrigue:rei_groups/special_saplings", "Special Saplings", "intrigue:special_saplings");
    // event.groupItemsByTag("intrigue:rei_groups/edenring/portal_mats", "Eden Ring Portal Blocks", "intrigue:edenring/portal_mats");
    // event.groupItemsByTag("intrigue:rei_groups/metal_raw_blocks", "Metallic Raw Blocks", "intrigue:metal_raw_blocks");
    // event.groupItemsByTag("intrigue:rei_groups/waystones", "Waystones", "intrigue:waystones");
    // event.groupItemsByTag("intrigue:rei_groups/woods", "Woods, Barks & Hyphae", "intrigue:woods_hyphae");

    // Another example: We want all of these items to be grouped together ignoring NBT,
    // so you don't have a bajillion potions and enchanted books cluttering up REI anymore
    const useNbt = ["potion", "enchanted_book", "splash_potion", "tipped_arrow", "lingering_potion"];

    useNbt.forEach((id) => {
        const item = Item.of(id);
        const { namespace2, path } = Utils.id(item.id);
        // console.info(id + " - id - " + item + " namespace:" + namespace2 + "_._" + path )
        event.groupSameItem(`intrigue:rei_groups/${namespace2}/${path}`, item.getName(), item);
    });



    event.groupItems("intrigue:rei_groups/daggers", "Daggers", [
        /.*dagger.*/,
        "#intrigue:daggers",
    ]);
    event.groupItems("intrigue:rei_groups/spears", "Spears", [
        /.*spear.*/,
        "#intrigue:spears",
    ]);
    event.groupItems("intrigue:rei_groups/rapiers", "Rapiers", [
        /.*rapier.*/,
        "#intrigue:rapiers",
    ]);
    event.groupItems("intrigue:rei_groups/haladies", "Haladies", [
        /.*haladie.*/,
        "#intrigue:haladies",
    ]);
    event.groupItems("intrigue:rei_groups/katana", "Katanas", [
        /.*katana.*/,
        "#intrigue:katanas",
    ]);
    event.groupItems("intrigue:rei_groups/shield", "Shields", [
        /.*shield.*/,
        "#intrigue:shields",
    ]);
    event.groupItems("intrigue:rei_groups/shield", "Hammers", [
        "#c:hammers",
        "#intrigue:hammers",
    ]);
    event.groupItems("intrigue:rei_groups/yoyos", "Yoyos", [
        /.*yoyo.*/,
        "#intrigue:yoyos",
    ]);
    event.groupItems("intrigue:rei_groups/boomerangs", "Boomerangs", [
        /.*boomerang.*/,
        "#intrigue:boomerangs",
    ]);

    event.groupItems("intrigue:rei_groups/scythes", "Scythes", [
        /.*scythe$/,
        "#intrigue:scythes",
    ]);
    event.groupItems("intrigue:rei_groups/machetes", "Machetes", [
        /.*machete.*/,
        "#intrigue:machetes",
    ]);

    event.groupItems("intrigue:rei_groups/bows", "Bows", [
        "#c:bows",
        "#intrigue:bows",
    ]);


    event.groupItems("intrigue:rei_groups/leaves", "Leaves", [
        /.*_leaves.*/,
        "#minecraft:leaves",
        "#intrigue:leaves",
    ]);

    event.groupItems("intrigue:rei_groups/planks", "Planks", [
        /.*_planks.*/,
        "#intrigue:planks",
    ]);

    event.groupItems("intrigue:rei_groups/bookshelfs", "Bookshelfs", [
        /.*bookshelf.*/,
        "#intrigue:bookshelfs",
    ]);
    event.groupItems("intrigue:rei_groups/crafting_tables", "Crafting Tables", [
        /^(?:(?!pocket).)+?_crafting_table$/,
        "#intrigue:crafting_tables",
    ]);

    event.groupItems("intrigue:rei_groups/barrels", "Barrels", [
        "#c:barrel",
        "#intrigue:barrels",
    ]);

    event.groupItems("intrigue:rei_groups/sized_flowers", "Flowers", [
        "#minecraft:small_flowers",
        "#minecraft:tall_flowers",
        "#intrigue:flowers",
    ]);
    
    event.groupItems("intrigue:rei_groups/grass", "Grass", [
        "#intrigue:grass",
        "#intrigue:folliage",
    ]);
    
    event.groupItems("intrigue:rei_groups/slime_balls", "Slime Balls", [
        "#c:slime_balls",
        "#intrigue:slime_balls",
    ]);
    event.groupItems("intrigue:rei_groups/slime_blocks", "Slime Blocks", [
        "#c:slime_blocks",
        "#intrigue:slime_blocks",
    ]);

    
    event.groupItems("intrigue:rei_groups/doors", "Doors", [
        /.*_door.*/,
        "#intrigue:doors",
    ]);
    event.groupItems("intrigue:rei_groups/trapdoors", "Trapdoors", [
        /.*trapdoor.*/,
        "#intrigue:trapdoors",
    ]);
    event.groupItems("intrigue:rei_groups/ladders", "Ladders", [
        /.*ladder.*/,
        "#intrigue:ladders",
    ]);
    event.groupItems("intrigue:rei_groups/fences", "Fences", [
        /.*_fence$/,
        "#intrigue:fences",
    ]);
    event.groupItems("intrigue:rei_groups/fence_gates", "Fence Gates", [
        /.*fence_gate$/,
        "#intrigue:fence_gates",
    ]);
    event.groupItems("intrigue:rei_groups/chains", "Chains", [
        /.*chain$/,
        "#intrigue:chains",
    ]);
    event.groupItems("intrigue:rei_groups/sponges", "Sponges", [
        /.*(:|_)sponge.*/,
        "#intrigue:sponges",
    ]);
    event.groupItems("intrigue:rei_groups/discs", "Discs", [
        /.*disc.*/,
        "#intrigue:discs",
    ]);
    event.groupItems("intrigue:rei_groups/boats", "Boats", [
        /.*boat.*/,
        "#intrigue:boats",
    ]);

    event.groupItems("intrigue:rei_groups/fragile_chests", "Fragile Chests", [
        "#intrigue:fragile_chests",
    ]);

    event.groupItems("intrigue:rei_groups/resilient_chests", "Resilient Chests", [
        "#intrigue:resilient_chests",
    ]);

    event.groupItems("intrigue:rei_groups/sturdy_chests", "Sturdy Chests", [
        "#intrigue:sturdy_chests",
    ]);

    event.groupItems("intrigue:rei_groups/metal_chests", "Metal Chests", [
        /mythicmetals_decorations.*chest/
    ]);
    event.groupItems("intrigue:rei_groups/metal_dust", "Metallic Dusts", [
        "#intrigue:metal_dust",
    ]);
    event.groupItems("intrigue:rei_groups/metal_nugget", "Metallic Nuggets", [
        "#intrigue:metal_nugget",
    ]);
    // event.groupItems("intrigue:rei_groups/boomerangs", "Leaves", [
    //     /.*_leaves.*/,
    //     "#minecraft:leaves",
    // ]);

    let object = {
        composter: {
            category_name: 'intrigue:rei_groups/composters',
            DisplayName: 'Composters',
            SearchResult: ['/.*composter.*/', '#intrigue:composters']
        }
      }
      
      for (index in object) {
        console.log(index + ':i - ' + object[index][0] + ': [0]-  ' + object[index].DisplayName)
        event.groupItems(object[index].category_name, object[index].DisplayName, object[index].SearchResult);
      }
    // Items can also be grouped using anything that can be expressed as an IngredientJS,
    // including for example regular expressions or lists of ingredients
    event.groupItems("intrigue:rei_groups/spawn_eggs", "Spawn Eggs", [
        /spawn_egg/,
    ]);
    event.groupItems("intrigue:rei_groups/beds", "Beds", [
        /_bed/,
    ]);
    event.groupItems("intrigue:rei_groups/ores", "Ores", [
        "#c:ores",
        "#intrigue:ores",
    ]);
    event.groupItems("intrigue:rei_groups/mythic_ores", "Mythic Ores", [
        "#intrigue:mythic_ores",
    ]);
    event.groupItems("intrigue:rei_groups/metal_blocks", "Metal Blocks", [
        "#intrigue:metal_blocks",
    ]);

    event.groupItems("intrigue:rei_groups/stripped_logs", "Stripped Logs", [
        /stripped/,
    ]);
    event.groupItems("intrigue:rei_groups/logs", "Logs", [
        /^(?:(?!stripped).)+?_log$/,
        /^(?:(?!stripped).)+?_stem$/,
        "#intrigue:other_logs",
    ]);
    event.groupItems("intrigue:rei_groups/sleeping_bags", "Sleeping Bags", [
        /.*sleeping_bag.*/,
        "#intrigue:sleeping_bags",
    ]);
    event.groupItems("intrigue:rei_groups/glider", "Gliders", [
        /.*glider.*/,
        "#intrigue:gliders",
    ]);
    event.groupItems("intrigue:rei_groups/elevators", "Elevators", [
        /.*elevator.*/,
        "#intrigue:elevators",
    ]);
    event.groupItems("intrigue:rei_groups/hammocks", "Hammocks", [
        /.*hammock.*/,
        "#intrigue:hammocks",
    ]);
    event.groupItems("intrigue:rei_groups/trinketable_backpacks", "Trinketable Backpacks", [
        /inmis:.*/
    ]);
    event.groupItems("intrigue:rei_groups/_backpacks", "Backpacks", [
        /backpackmod:.*/,
    ]);


    // // you can even use custom predicates for grouping, like so:
    // event.groupItemsIf("kubejs:rei_groups/looting_stuff", "Stuff with Looting I", (item) =>
    //     // this would group together all items that have the Looting I enchantment on them
    //     item.hasEnchantment("minecraft:looting", 1)
    // );

    // // you can also group fluids in much the same way as you can group items, for instance:
    // event.groupFluidsByTag("kubejs:rei_groups/fluid_tagged_as_water", `"Water" (yeah right lmao)`, "minecraft:water");
});

  onEvent('rei.hide.items', event => {
    event.hide("#c:bundles")
    console.info('ABC \n')
  })
//   onEvent('rei.hide.items', event => {
//     event.hide('minecraft:dirt')
//     console.info('ABC \n')
//   })