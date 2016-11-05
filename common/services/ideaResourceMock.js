(function() {
    'use strict';

    var app = angular.module("ideaResourceMock", ["ngMockE2E"]);

    app.run(function($httpBackend) {
        var ideas = [{
            "ideaId": 1,
            "name": "Mike's Big Idea",
            "description": "It's a big idea. Bigger than your idea. Everyone likes my ideas better",
            "skillsNeeded": ["FrontEnd", "BackEnd"],
            "subject": "A cool website",
            "difficulty": 4
        }, {
            "ideaId": 2,
            "name": "Whatever happened to Lil' Romeo?",
            "description": "Collect pictures, sighting reports, and blurry videos of Lil' Romeo",
            "skillsNeeded": ["FrontEnd", "Java", "Design"],
            "subject": "90's Pop Culture",
            "difficulty": 2
        }, {
            "ideaId": 3,
            "name": "Data Viz of the World",
            "description": "A comprehensive data visualization of every data point available world wide",
            "skillsNeeded": ["R", "DatabaseAdmin", "Pandas", "GraphingSoftware"],
            "subject": "Data Visualization",
            "difficulty": 11
        }, {
            "ideaId": 4,
            "name": "sociis natoque penatibus et magnis",
            "description": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
            "skillsNeeded": [
                "leverage",
                "Re-contextualized",
                "Re-contextualized",
                "5th generation",
                "methodology",
                "Networked"
            ],
            "subject": "aliquam sit",
            "difficulty": 7
        }, {
            "ideaId": 5,
            "name": "integer aliquet massa id lobortis",
            "description": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
            "skillsNeeded": [
                "open architecture",
                "ability",
                "analyzer"
            ],
            "subject": "euismod",
            "difficulty": 10
        }, {
            "ideaId": 6,
            "name": "risus dapibus augue vel",
            "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "skillsNeeded": [
                "Advanced",
                "extranet",
                "data-warehouse",
                "budgetary management",
                "time-frame"
            ],
            "subject": "gravida",
            "difficulty": 4
        }, {
            "ideaId": 7,
            "name": "dui vel sem sed sagittis nam",
            "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
            "skillsNeeded": [
                "Progressive",
                "Cross-group"
            ],
            "subject": "aliquam",
            "difficulty": 1
        }, {
            "ideaId": 8,
            "name": "nulla neque libero convallis eget eleifend",
            "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
            "skillsNeeded": [
                "Open-source",
                "Innovative",
                "Assimilated",
                "paradigm",
                "strategy",
                "grid-enabled"
            ],
            "subject": "nulla elit ac",
            "difficulty": 2
        }, {
            "ideaId": 9,
            "name": "ultrices aliquet maecenas",
            "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
            "skillsNeeded": [
                "bottom-line",
                "array",
                "composite",
                "collaboration",
                "Triple-buffered"
            ],
            "subject": "consequat morbi a",
            "difficulty": 2
        }, {
            "ideaId": 10,
            "name": "eget elit sodales scelerisque mauris sit",
            "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "skillsNeeded": [
                "stable",
                "Reverse-engineered",
                "software",
                "frame"
            ],
            "subject": "ut",
            "difficulty": 5
        }, {
            "ideaId": 11,
            "name": "purus eu magna vulputate luctus cum",
            "description": "Donec ut mauris eget massa tempor convallis.",
            "skillsNeeded": [
                "groupware",
                "Networked",
                "Graphical User Interface",
                "Optional",
                "Assimilated",
                "groupware"
            ],
            "subject": "metus vitae",
            "difficulty": 5
        }, {
            "ideaId": 12,
            "name": "sollicitudin mi sit amet lobortis",
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
            "skillsNeeded": [
                "demand-driven",
                "open system"
            ],
            "subject": "a pede posuere",
            "difficulty": 5
        }, {
            "ideaId": 13,
            "name": "at ipsum ac tellus semper interdum",
            "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "skillsNeeded": [
                "intangible",
                "Re-contextualized",
                "archive",
                "customer loyalty"
            ],
            "subject": "vestibulum ante ipsum",
            "difficulty": 6
        }, {
            "ideaId": 14,
            "name": "morbi vestibulum velit id pretium iaculis",
            "description": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "skillsNeeded": [
                "De-engineered",
                "secured line",
                "Versatile"
            ],
            "subject": "iaculis",
            "difficulty": 6
        }, {
            "ideaId": 15,
            "name": "diam in magna bibendum imperdiet",
            "description": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "skillsNeeded": [
                "structure"
            ],
            "subject": "adipiscing",
            "difficulty": 6
        }, {
            "ideaId": 16,
            "name": "nisl aenean lectus pellentesque eget",
            "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "skillsNeeded": [
                "6th generation",
                "encryption",
                "system-worthy",
                "User-centric",
                "Assimilated",
                "bi-directional"
            ],
            "subject": "ultrices",
            "difficulty": 5
        }, {
            "ideaId": 17,
            "name": "quis justo maecenas rhoncus aliquam",
            "description": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
            "skillsNeeded": [
                "Synchronised"
            ],
            "subject": "ligula",
            "difficulty": 2
        }, {
            "ideaId": 18,
            "name": "eget congue eget semper rutrum",
            "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
            "skillsNeeded": [
                "explicit",
                "even-keeled",
                "leading edge",
                "Organic",
                "neutral"
            ],
            "subject": "sed",
            "difficulty": 9
        }, {
            "ideaId": 19,
            "name": "volutpat sapien arcu",
            "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
            "skillsNeeded": [
                "budgetary management"
            ],
            "subject": "in hac",
            "difficulty": 6
        }, {
            "ideaId": 20,
            "name": "nisi venenatis tristique fusce congue",
            "description": "In congue. Etiam justo. Etiam pretium iaculis justo.",
            "skillsNeeded": [
                "parallelism",
                "parallelism",
                "motivating",
                "ability",
                "Managed"
            ],
            "subject": "blandit",
            "difficulty": 2
        }, {
            "ideaId": 21,
            "name": "pellentesque quisque porta volutpat erat",
            "description": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "skillsNeeded": [
                "functionalities"
            ],
            "subject": "odio elementum",
            "difficulty": 4
        }, {
            "ideaId": 22,
            "name": "volutpat sapien arcu",
            "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
            "skillsNeeded": [
                "complexity",
                "Customizable",
                "architecture",
                "3rd generation",
                "Quality-focused"
            ],
            "subject": "in ante",
            "difficulty": 2
        }, {
            "ideaId": 23,
            "name": "hendrerit at vulputate vitae nisl aenean",
            "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "skillsNeeded": [
                "throughput",
                "24/7",
                "Total",
                "structure"
            ],
            "subject": "sed vestibulum sit",
            "difficulty": 7
        }, {
            "ideaId": 24,
            "name": "nunc nisl duis bibendum felis",
            "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
            "skillsNeeded": [
                "Expanded",
                "portal",
                "Multi-channelled",
                "Ergonomic",
                "zero defect"
            ],
            "subject": "tincidunt ante",
            "difficulty": 9
        }, {
            "ideaId": 25,
            "name": "in tempor turpis",
            "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
            "skillsNeeded": [
                "collaboration",
                "conglomeration",
                "motivating",
                "Fully-configurable",
                "implementation",
                "human-resource"
            ],
            "subject": "fusce lacus purus",
            "difficulty": 2
        }, {
            "ideaId": 26,
            "name": "orci luctus et ultrices posuere cubilia",
            "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
            "skillsNeeded": [
                "Public-key",
                "extranet",
                "Exclusive",
                "architecture",
                "implementation"
            ],
            "subject": "etiam faucibus",
            "difficulty": 1
        }, {
            "ideaId": 27,
            "name": "orci luctus et ultrices posuere cubilia",
            "description": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "skillsNeeded": [
                "systemic",
                "concept",
                "knowledge user",
                "solution-oriented",
                "Function-based"
            ],
            "subject": "massa",
            "difficulty": 1
        }, {
            "ideaId": 28,
            "name": "pede malesuada in imperdiet",
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
            "skillsNeeded": [
                "productivity",
                "focus group",
                "Distributed",
                "workforce"
            ],
            "subject": "dis parturient",
            "difficulty": 4
        }, {
            "ideaId": 29,
            "name": "augue vel accumsan tellus nisi",
            "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "skillsNeeded": [
                "Operative",
                "Reactive"
            ],
            "subject": "faucibus",
            "difficulty": 1
        }, {
            "ideaId": 30,
            "name": "id luctus nec",
            "description": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "skillsNeeded": [
                "leading edge",
                "adapter"
            ],
            "subject": "suspendisse ornare",
            "difficulty": 10
        }, {
            "ideaId": 31,
            "name": "et tempus semper est",
            "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
            "skillsNeeded": [
                "forecast"
            ],
            "subject": "id justo",
            "difficulty": 10
        }, {
            "ideaId": 32,
            "name": "aliquam quis turpis eget",
            "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
            "skillsNeeded": [
                "policy",
                "Ergonomic",
                "Future-proofed"
            ],
            "subject": "id consequat",
            "difficulty": 10
        }, {
            "ideaId": 33,
            "name": "in eleifend quam a odio",
            "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            "skillsNeeded": [
                "bifurcated"
            ],
            "subject": "semper sapien a",
            "difficulty": 5
        }, {
            "ideaId": 34,
            "name": "in felis eu",
            "description": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "skillsNeeded": [
                "intermediate",
                "asynchronous"
            ],
            "subject": "auctor gravida sem",
            "difficulty": 4
        }, {
            "ideaId": 35,
            "name": "sodales scelerisque mauris sit",
            "description": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "skillsNeeded": [
                "implementation",
                "Persevering",
                "foreground",
                "protocol"
            ],
            "subject": "diam",
            "difficulty": 10
        }, {
            "ideaId": 36,
            "name": "curae nulla dapibus dolor vel",
            "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
            "skillsNeeded": [
                "Advanced",
                "high-level",
                "Stand-alone",
                "Organized",
                "Synergized"
            ],
            "subject": "ut",
            "difficulty": 7
        }, {
            "ideaId": 37,
            "name": "nisi at nibh in",
            "description": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
            "skillsNeeded": [
                "Open-architected",
                "fresh-thinking"
            ],
            "subject": "nam nulla",
            "difficulty": 9
        }, {
            "ideaId": 38,
            "name": "accumsan tellus nisi eu orci",
            "description": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
            "skillsNeeded": [
                "mobile",
                "system engine",
                "Multi-layered",
                "24/7",
                "fresh-thinking",
                "Centralized"
            ],
            "subject": "sit amet nulla",
            "difficulty": 6
        }, {
            "ideaId": 39,
            "name": "id massa id nisl venenatis",
            "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "skillsNeeded": [
                "attitude",
                "client-driven",
                "background"
            ],
            "subject": "nunc commodo placerat",
            "difficulty": 3
        }, {
            "ideaId": 40,
            "name": "massa tempor convallis nulla neque libero",
            "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
            "skillsNeeded": [
                "Enterprise-wide",
                "context-sensitive",
                "benchmark",
                "middleware",
                "full-range"
            ],
            "subject": "dolor vel",
            "difficulty": 9
        }, {
            "ideaId": 41,
            "name": "elementum in hac",
            "description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
            "skillsNeeded": [
                "Multi-tiered",
                "multimedia",
                "full-range",
                "actuating",
                "encoding"
            ],
            "subject": "non",
            "difficulty": 10
        }, {
            "ideaId": 42,
            "name": "posuere cubilia curae mauris viverra diam",
            "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
            "skillsNeeded": [
                "conglomeration",
                "ability",
                "superstructure"
            ],
            "subject": "nisi",
            "difficulty": 7
        }, {
            "ideaId": 43,
            "name": "orci eget orci",
            "description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "skillsNeeded": [
                "tertiary",
                "Extended",
                "Horizontal",
                "Versatile",
                "mobile"
            ],
            "subject": "nulla neque",
            "difficulty": 1
        }, {
            "ideaId": 44,
            "name": "mi pede malesuada in imperdiet et",
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "skillsNeeded": [
                "non-volatile",
                "Mandatory",
                "transitional",
                "system engine",
                "Reactive"
            ],
            "subject": "congue risus",
            "difficulty": 7
        }, {
            "ideaId": 45,
            "name": "eu est congue",
            "description": "In hac habitasse platea dictumst.",
            "skillsNeeded": [
                "utilisation"
            ],
            "subject": "tortor quis",
            "difficulty": 10
        }, {
            "ideaId": 46,
            "name": "convallis duis consequat",
            "description": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
            "skillsNeeded": [
                "De-engineered",
                "full-range"
            ],
            "subject": "turpis elementum",
            "difficulty": 4
        }, {
            "ideaId": 47,
            "name": "aliquam non mauris morbi non",
            "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
            "skillsNeeded": [
                "multimedia",
                "object-oriented",
                "Exclusive",
                "real-time",
                "Team-oriented",
                "Profit-focused"
            ],
            "subject": "integer a nibh",
            "difficulty": 5
        }, {
            "ideaId": 48,
            "name": "lacinia aenean sit amet justo morbi",
            "description": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "skillsNeeded": [
                "Polarised",
                "value-added",
                "Fundamental",
                "Total"
            ],
            "subject": "cubilia curae donec",
            "difficulty": 10
        }, {
            "ideaId": 49,
            "name": "eu mi nulla ac",
            "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "skillsNeeded": [
                "bottom-line"
            ],
            "subject": "curae",
            "difficulty": 9
        }, {
            "ideaId": 50,
            "name": "tortor duis mattis egestas metus",
            "description": "Aenean sit amet justo. Morbi ut odio.",
            "skillsNeeded": [
                "Customer-focused",
                "Robust",
                "Function-based",
                "well-modulated"
            ],
            "subject": "consequat",
            "difficulty": 2
        }, {
            "ideaId": 51,
            "name": "urna pretium nisl",
            "description": "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
            "skillsNeeded": [
                "utilisation",
                "Cross-platform",
                "Face to face",
                "ability"
            ],
            "subject": "consectetuer adipiscing",
            "difficulty": 6
        }, {
            "ideaId": 52,
            "name": "donec pharetra magna vestibulum aliquet ultrices",
            "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "skillsNeeded": [
                "monitoring",
                "motivating"
            ],
            "subject": "laoreet ut",
            "difficulty": 6
        }, {
            "ideaId": 53,
            "name": "blandit lacinia erat vestibulum",
            "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "skillsNeeded": [
                "moratorium",
                "initiative",
                "dynamic"
            ],
            "subject": "nunc",
            "difficulty": 2
        }, {
            "ideaId": 54,
            "name": "ipsum integer a nibh in",
            "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "skillsNeeded": [
                "Re-contextualized",
                "Re-contextualized",
                "regional",
                "Optional"
            ],
            "subject": "ullamcorper purus sit",
            "difficulty": 4
        }, {
            "ideaId": 55,
            "name": "fermentum justo nec condimentum neque sapien",
            "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
            "skillsNeeded": [
                "Vision-oriented"
            ],
            "subject": "gravida nisi at",
            "difficulty": 10
        }, {
            "ideaId": 56,
            "name": "velit id pretium iaculis diam",
            "description": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
            "skillsNeeded": [
                "Open-source",
                "dedicated",
                "Enterprise-wide",
                "leverage",
                "workforce"
            ],
            "subject": "mauris",
            "difficulty": 3
        }, {
            "ideaId": 57,
            "name": "placerat praesent blandit nam",
            "description": "Aliquam erat volutpat. In congue. Etiam justo.",
            "skillsNeeded": [
                "local area network",
                "methodical",
                "flexibility",
                "paradigm",
                "Realigned",
                "Compatible"
            ],
            "subject": "amet lobortis sapien",
            "difficulty": 10
        }, {
            "ideaId": 58,
            "name": "odio odio elementum",
            "description": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "skillsNeeded": [
                "tertiary",
                "open architecture",
                "Diverse",
                "flexibility"
            ],
            "subject": "turpis",
            "difficulty": 2
        }, {
            "ideaId": 59,
            "name": "cubilia curae donec pharetra magna vestibulum",
            "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
            "skillsNeeded": [
                "Programmable",
                "open architecture",
                "client-server"
            ],
            "subject": "at feugiat non",
            "difficulty": 10
        }, {
            "ideaId": 60,
            "name": "montes nascetur ridiculus mus etiam vel",
            "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
            "skillsNeeded": [
                "Implemented",
                "Graphical User Interface",
                "adapter",
                "functionalities",
                "groupware"
            ],
            "subject": "vel sem",
            "difficulty": 5
        }, {
            "ideaId": 61,
            "name": "quam pede lobortis ligula",
            "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
            "skillsNeeded": [
                "Balanced",
                "Future-proofed",
                "knowledge base",
                "scalable",
                "eco-centric",
                "success"
            ],
            "subject": "auctor sed",
            "difficulty": 2
        }, {
            "ideaId": 62,
            "name": "rutrum ac lobortis",
            "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "skillsNeeded": [
                "protocol",
                "attitude-oriented",
                "Synchronised",
                "multi-state",
                "mobile",
                "fresh-thinking"
            ],
            "subject": "donec ut dolor",
            "difficulty": 1
        }, {
            "ideaId": 63,
            "name": "sed justo pellentesque viverra pede ac",
            "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            "skillsNeeded": [
                "bottom-line",
                "Organized",
                "Organic",
                "homogeneous",
                "Profit-focused"
            ],
            "subject": "cras in purus",
            "difficulty": 10
        }, {
            "ideaId": 64,
            "name": "ante ipsum primis",
            "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
            "skillsNeeded": [
                "Multi-tiered",
                "homogeneous",
                "Devolved"
            ],
            "subject": "nisi eu orci",
            "difficulty": 2
        }, {
            "ideaId": 65,
            "name": "nisl nunc rhoncus dui",
            "description": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
            "skillsNeeded": [
                "bifurcated",
                "scalable",
                "regional"
            ],
            "subject": "eget nunc donec",
            "difficulty": 9
        }, {
            "ideaId": 66,
            "name": "et ultrices posuere cubilia curae mauris",
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
            "skillsNeeded": [
                "throughput",
                "scalable"
            ],
            "subject": "orci",
            "difficulty": 10
        }, {
            "ideaId": 67,
            "name": "fermentum donec ut",
            "description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
            "skillsNeeded": [
                "asymmetric",
                "Digitized",
                "moderator"
            ],
            "subject": "rhoncus",
            "difficulty": 5
        }, {
            "ideaId": 68,
            "name": "cubilia curae nulla dapibus dolor",
            "description": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "skillsNeeded": [
                "forecast",
                "Configurable",
                "Graphical User Interface",
                "customer loyalty",
                "portal"
            ],
            "subject": "accumsan",
            "difficulty": 5
        }, {
            "ideaId": 69,
            "name": "vestibulum eget vulputate ut",
            "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
            "skillsNeeded": [
                "Proactive"
            ],
            "subject": "lorem ipsum dolor",
            "difficulty": 2
        }, {
            "ideaId": 70,
            "name": "montes nascetur ridiculus mus vivamus",
            "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "skillsNeeded": [
                "contingency",
                "Re-engineered",
                "multi-state",
                "Graphical User Interface"
            ],
            "subject": "rutrum",
            "difficulty": 7
        }, {
            "ideaId": 71,
            "name": "euismod scelerisque quam",
            "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
            "skillsNeeded": [
                "intangible",
                "concept",
                "impactful"
            ],
            "subject": "nulla neque",
            "difficulty": 9
        }, {
            "ideaId": 72,
            "name": "vestibulum rutrum rutrum",
            "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
            "skillsNeeded": [
                "24 hour"
            ],
            "subject": "ridiculus mus etiam",
            "difficulty": 5
        }, {
            "ideaId": 73,
            "name": "eu sapien cursus vestibulum",
            "description": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
            "skillsNeeded": [
                "open architecture",
                "framework",
                "Business-focused",
                "ability"
            ],
            "subject": "quam",
            "difficulty": 8
        }, {
            "ideaId": 74,
            "name": "habitasse platea dictumst",
            "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
            "skillsNeeded": [
                "leverage",
                "artificial intelligence",
                "Devolved",
                "encryption"
            ],
            "subject": "felis",
            "difficulty": 2
        }, {
            "ideaId": 75,
            "name": "ut odio cras mi pede malesuada",
            "description": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
            "skillsNeeded": [
                "hub"
            ],
            "subject": "porta volutpat",
            "difficulty": 4
        }, {
            "ideaId": 76,
            "name": "quisque porta volutpat erat quisque erat",
            "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
            "skillsNeeded": [
                "Profound",
                "Customer-focused",
                "Team-oriented",
                "Virtual",
                "moderator",
                "instruction set"
            ],
            "subject": "vestibulum velit id",
            "difficulty": 8
        }, {
            "ideaId": 77,
            "name": "nulla sed accumsan felis ut at",
            "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
            "skillsNeeded": [
                "bottom-line",
                "upward-trending",
                "asynchronous",
                "flexibility"
            ],
            "subject": "id luctus nec",
            "difficulty": 1
        }, {
            "ideaId": 78,
            "name": "vestibulum ante ipsum primis in",
            "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
            "skillsNeeded": [
                "bandwidth-monitored",
                "toolset",
                "background",
                "Centralized",
                "monitoring"
            ],
            "subject": "egestas metus aenean",
            "difficulty": 7
        }, {
            "ideaId": 79,
            "name": "venenatis non sodales sed tincidunt",
            "description": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "skillsNeeded": [
                "Exclusive",
                "Monitored"
            ],
            "subject": "sed",
            "difficulty": 10
        }, {
            "ideaId": 80,
            "name": "dolor vel est donec odio justo",
            "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
            "skillsNeeded": [
                "Face to face",
                "Compatible",
                "tertiary",
                "multimedia",
                "asynchronous",
                "attitude-oriented"
            ],
            "subject": "rhoncus",
            "difficulty": 7
        }, {
            "ideaId": 81,
            "name": "tincidunt ante vel ipsum praesent blandit",
            "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
            "skillsNeeded": [
                "Polarised"
            ],
            "subject": "nec sem duis",
            "difficulty": 5
        }, {
            "ideaId": 82,
            "name": "ac lobortis vel dapibus at diam",
            "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "skillsNeeded": [
                "throughput",
                "monitoring",
                "grid-enabled",
                "national",
                "Versatile",
                "process improvement"
            ],
            "subject": "vel",
            "difficulty": 9
        }, {
            "ideaId": 83,
            "name": "dui maecenas tristique est et",
            "description": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
            "skillsNeeded": [
                "core",
                "Diverse",
                "Persevering"
            ],
            "subject": "sit",
            "difficulty": 6
        }, {
            "ideaId": 84,
            "name": "metus arcu adipiscing molestie hendrerit",
            "description": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
            "skillsNeeded": [
                "Innovative",
                "client-driven",
                "zero tolerance"
            ],
            "subject": "odio cras mi",
            "difficulty": 7
        }, {
            "ideaId": 85,
            "name": "dictumst aliquam augue quam",
            "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "skillsNeeded": [
                "portal",
                "zero tolerance",
                "transitional",
                "Public-key",
                "actuating"
            ],
            "subject": "faucibus",
            "difficulty": 2
        }, {
            "ideaId": 86,
            "name": "hac habitasse platea dictumst",
            "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
            "skillsNeeded": [
                "structure",
                "Managed",
                "Reverse-engineered",
                "conglomeration",
                "core",
                "product"
            ],
            "subject": "eu",
            "difficulty": 3
        }, {
            "ideaId": 87,
            "name": "eget eros elementum pellentesque quisque porta",
            "description": "Nulla nisl. Nunc nisl.",
            "skillsNeeded": [
                "Function-based",
                "hybrid",
                "multi-tasking",
                "task-force",
                "Front-line"
            ],
            "subject": "ante ipsum",
            "difficulty": 7
        }, {
            "ideaId": 88,
            "name": "lectus aliquam sit amet",
            "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
            "skillsNeeded": [
                "Robust",
                "optimizing",
                "well-modulated",
                "Exclusive"
            ],
            "subject": "eget elit sodales",
            "difficulty": 9
        }, {
            "ideaId": 89,
            "name": "nec molestie sed justo pellentesque viverra",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique.",
            "skillsNeeded": [
                "middleware",
                "superstructure",
                "projection",
                "Multi-tiered"
            ],
            "subject": "ornare consequat lectus",
            "difficulty": 2
        }, {
            "ideaId": 90,
            "name": "nec nisi volutpat eleifend donec",
            "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
            "skillsNeeded": [
                "Self-enabling",
                "Graphical User Interface",
                "Enterprise-wide",
                "stable",
                "disintermediate"
            ],
            "subject": "etiam justo",
            "difficulty": 3
        }, {
            "ideaId": 91,
            "name": "orci vehicula condimentum curabitur",
            "description": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
            "skillsNeeded": [
                "User-centric",
                "Distributed",
                "orchestration",
                "Customer-focused"
            ],
            "subject": "augue vestibulum",
            "difficulty": 1
        }, {
            "ideaId": 92,
            "name": "justo etiam pretium iaculis",
            "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "skillsNeeded": [
                "Ameliorated",
                "Inverse",
                "Function-based"
            ],
            "subject": "mi integer",
            "difficulty": 7
        }, {
            "ideaId": 93,
            "name": "aliquam erat volutpat in congue",
            "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            "skillsNeeded": [
                "leading edge",
                "contextually-based",
                "hardware"
            ],
            "subject": "orci",
            "difficulty": 7
        }, {
            "ideaId": 94,
            "name": "aliquam non mauris morbi non lectus",
            "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
            "skillsNeeded": [
                "secondary",
                "Open-source",
                "Programmable"
            ],
            "subject": "ac tellus semper",
            "difficulty": 10
        }, {
            "ideaId": 95,
            "name": "integer ac neque",
            "description": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "skillsNeeded": [
                "Pre-emptive"
            ],
            "subject": "nulla ac",
            "difficulty": 5
        }, {
            "ideaId": 96,
            "name": "nulla pede ullamcorper augue",
            "description": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "skillsNeeded": [
                "systematic",
                "throughput",
                "Mandatory",
                "Customer-focused",
                "conglomeration"
            ],
            "subject": "convallis nulla",
            "difficulty": 7
        }, {
            "ideaId": 97,
            "name": "nulla eget eros",
            "description": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
            "skillsNeeded": [
                "Extended",
                "ability",
                "Vision-oriented"
            ],
            "subject": "tempus vel pede",
            "difficulty": 10
        }, {
            "ideaId": 98,
            "name": "integer ac leo pellentesque ultrices mattis",
            "description": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
            "skillsNeeded": [
                "attitude"
            ],
            "subject": "non mi integer",
            "difficulty": 9
        }, {
            "ideaId": 99,
            "name": "nullam sit amet turpis",
            "description": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
            "skillsNeeded": [
                "utilisation"
            ],
            "subject": "sapien",
            "difficulty": 8
        }, {
            "ideaId": 100,
            "name": "est lacinia nisi",
            "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
            "skillsNeeded": [
                "modular",
                "frame",
                "circuit",
                "directional",
                "neural-net"
            ],
            "subject": "sapien sapien",
            "difficulty": 1
        }]

        var ideaUrl = "/api/ideas";

        $httpBackend.whenGET(ideaUrl).respond(ideas);

        var editingRegex = new RegExp(ideaUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
            var idea = {
                "ideaId": 0
            };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < ideas.length; i++) {
                    if (ideas[i].ideaId == id) {
                        idea = ideas[i];
                        break;
                    }
                }
            }

            return [200, idea, {}];
        })

        $httpBackend.whenPOST(ideaUrl).respond(function(method, url, data) {
            var idea = angular.fromJson(data);

            if (!idea.ideaId) {
                idea.ideaId = ideas[ideas.length - 1].ideaId + 1;
                ideas.push(idea);
            }
            else {
                for (var i = 0; i < ideas.length; i++) {
                    if (ideas[i].ideaId == idea.ideaId) {
                        ideas[i] = idea;
                        break;
                    }
                }
            }

            return [200, idea, {}];
        })

        $httpBackend.whenGET(/app/).passThrough();
    });
}());
