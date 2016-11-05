(function() {
    'use strict';
    
    var app = angular.module("ideaResourceMock", ["ngMockE2E"]);
    
    app.run(function ($httpBackend) {
        var ideas = [
            {
                "ideaId": 1,
                "name": "Mike's Big Idea",
                "description": "It's a big idea. Bigger than your idea. Everyone likes my ideas better",
                "skillsNeeded": ["FrontEnd", "BackEnd"],
                "subject": "A cool website",
                "difficulty": 4
            },
            {
                "ideaId": 2,
                "name": "Whatever happened to Lil' Romeo?",
                "description": "Collect pictures, sighting reports, and blurry videos of Lil' Romeo",
                "skillsNeeded": ["FrontEnd", "Java", "Design"],
                "subject": "90's Pop Culture",
                "difficulty": 2
            },
            {
                "ideaId": 3,
                "name": "Data Viz of the World",
                "description": "A comprehensive data visualization of every data point available world wide",
                "skillsNeeded": ["R", "DatabaseAdmin", "Pandas", "GraphingSoftware"],
                "subject": "Data Visualization",
                "difficulty": 11
            }
        ]
        
        var ideaUrl = "/api/ideas";
        
        $httpBackend.whenGET(ideaUrl).respond(ideas);
        
        var editingRegex = new RegExp(ideaUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
            var idea = {"ideaId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            
            if(id > 0) {
                for(var i = 0; i < ideas.length; i++) {
                    if(ideas[i].ideaId == id) {
                        idea = ideas[i];
                        break;
                    }
                }
            }
            
            return [200, idea, {}];
        })
        
        $httpBackend.whenGET(/app/).passThrough();
    });
}());