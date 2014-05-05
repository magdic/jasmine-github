describe("Title: Jasmine Test", function() {
          it("It's search for vulgaries word", function() {

            var badWords = ["gore ", "morbo", "sadico", "necrofilia"];
            for (var i = badWords.length - 1; i >= 0; i--) {
              badWords[i];            
              expect(helloWorld()).not.toContain(badWords[i]);
            }
          });
});


