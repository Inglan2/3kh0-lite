FullScreenMario.FullScreenMario.settings.maps.library["1-3"] = {
    "name": "1-3",
    "time": 300,
    "locations": [
        { "entry": "Plain" }
    ],
    "areas": [
        {
            "setting": "Overworld",
            "blockBoundaries": true,
            "creation": [
                { "macro": "Pattern", "pattern": "BackCloud", "x": 0, "y": 4, "repeat": 5 },
                { "macro": "Floor", "x": 0, "y": 0, "width": 128 },
                { "macro": "CastleSmall" },
                { "macro": "Tree", "x": 144, "y": 8, "width": 32 },
                { "macro": "Tree", "x": 192, "y": 32, "width": 64, "solidTrunk": true },
                { "macro": "Tree", "x": 208, "y": 64, "width": 40 },
                { "macro": "Fill", "thing": "Coin", "x": 217, "y": 71, "xnum": 3, "xwidth": 8 },
                { "thing": "Koopa", "x": 240, "y": 76, "smart": true },
                { "macro": "Tree", "x": 256, "y": 8, "width": 24 },
                { "thing": "Coin", "x": 266, "y": 15 },
                { "macro": "Tree", "x": 280, "y": 40, "width": 40 },
                { "macro": "Fill", "thing": "Coin", "x": 297, "y": 87, "xnum": 2, "xwidth": 8 },
                { "macro": "Tree", "x": 320, "y": 72, "width": 56 },
                { "macro": "Fill", "thing": "Goomba", "x": 352, "y": 80, "xnum": 2, "xwidth": 16 },
                { "macro": "Tree", "x": 400, "width": 32 },
                { "macro": "Fill", "thing": "Coin", "x": 402, "y": 55, "xnum": 2, "xwidth": 8 },
                { "thing": "Platform", "x": 440, "y": 56, "width": 24, "floating": true, "begin": -4, "end": 56 },
                { "macro": "Tree", "x": 472, "width": 40 },
                { "thing": "Block", "x": 472, "y": 24, "contents": "Mushroom" },
                { "macro": "Tree", "x": 480, "y": 64, "width": 32 },
                { "macro": "Fill", "thing": "Coin", "x": 482, "y": 71, "xnum": 4, "xwidth": 8 },
                { "macro": "Tree", "x": 520, "width": 40 },
                { "macro": "Tree", "x": 560, "y": 32, "width": 24 },
                { "thing": "Koopa", "x": 592, "y": 76, "smart": true, "jumping": true, "floating": true, "begin": 16, "end": 88 },
                { "macro": "Tree", "x": 608, "y": 56, "width": 48 },
                { "thing": "Goomba", "x": 640, "y": 64 },
                { "macro": "Fill", "thing": "Coin", "x": 681, "y": 63, "xnum": 2, "xwidth": 8 },
                { "thing": "Platform", "x": 688, "y": 40, "width": 24, "sliding": true, "begin": 660, "end": 720 },
                { "macro": "Fill", "thing": "Coin", "x": 745, "y": 71, "xnum": 2, "xwidth": 8 },
                { "thing": "Platform", "x": 752, "y": 32, "width": 24, "sliding": true, "begin": 708, "end": 776 },
                { "macro": "Fill", "thing": "Coin", "x": 777, "y": 71, "xnum": 2, "xwidth": 8 },
                { "macro": "Tree", "x": 784, "y": 16, "width": 32 },
                { "macro": "Tree", "x": 832, "y": 48, "width": 64, "solidTrunk": true },
                { "thing": "Koopa", "x": 880, "y": 60, "smart": true },
                { "macro": "Tree", "x": 904, "width": 24 },
                { "macro": "Fill", "thing": "Coin", "x": 906, "y": 7, "xnum": 3, "xwidth": 8 },
                { "thing": "Koopa", "x": 912, "y": 68, "smart": true, "jumping": true, "floating": true, "begin": 4, "end": 76 },
                { "macro": "Tree", "x": 928, "y": 32, "width": 32 },
                { "macro": "Fill", "thing": "Coin", "x": 963, "y": 63, "xnum": 2, "xwidth": 8 },
                { "macro": "Tree", "x": 976, "y": 32, "width": 32, "solidTrunk": true },
                { "macro": "Floor", "x": 1032, "width": 368 },
                { "thing": "Platform", "x": 1048, "y": 56, "width": 24, "sliding": true, "begin": 1024, "end": 1068 },
                { "thing": "Koopa", "x": 1064, "y": 12, "smart": true },
                { "thing": "Stone", "x": 1104, "y": 32, "width": 16, "height": 32 },
                { "thing": "Stone", "x": 1120, "y": 48, "width": 16, "height": 48 },
                { "thing": "Stone", "x": 1136, "y": 64, "width": 16, "height": 64 },
                { "macro": "EndOutsideCastle", "x": 1224, "large": true, "walls": 12, "transport": { "map": "1-4" } }
            ]
        }
    ]
};