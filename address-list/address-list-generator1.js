var ADDRESSBOOK = {


	init: function() {
        ADDRESSBOOK.listFiller = new ADDRESSBOOK.FormView($("#address-generator"));
        ADDRESSBOOK.theList = new ADDRESSBOOK.ListView($("#list"));
    },

    // View == controller
    FormView: function(formGen){
            // Private variable because 'var, make it local scope
            var getFullName = function(){
                    var first_name = formGen.find("#first_name").val();
                    var last_name = formGen.find("#last_name").val();
                    // return "hello";
                    // return first_name;
                    return {
                        first_name: first_name,
                        last_name: last_name
                    }
                };

            var bindEvents = function(){
                 formGen.bind("submit", function(e){
                     e.preventDefault();
                     // console.log("something");
                     // console.log(getFullName());
                     ADDRESSBOOK.AddressBookModel.data.push(getFullName());
                     console.log(ADDRESSBOOK.AddressBookModel);
                     ADDRESSBOOK.theList.render(ADDRESSBOOK.template, ADDRESSBOOK.AddressBookModel);

                     
                 });
                };

        var init = (function(){
            bindEvents();
        })();
    },

    // Model used by FormView
    AddressBookModel: {
        data: []
    },

    // String so no capitisation
    template: "{{#data}}<dl><dt>{{first_name}}</dt><dd>{{last_name}}</dd></dl>{{/data}}",

    // View == controller
    ListView: function(listGen){
        this.render = function( template, model){
            var html = Mustache.to_html(template, model);
            listGen.html(html);
        };

    }
};
ADDRESSBOOK.init();





























