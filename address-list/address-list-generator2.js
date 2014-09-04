var ADDRESSBOOK = {


    init: function() {
        ADDRESSBOOK.listFiller = new ADDRESSBOOK.FormView($("#address-generator"));
        ADDRESSBOOK.theList = new ADDRESSBOOK.ListView($("#list"));

        var callback = function(){ //callback works asynchroniously and renders page
            ADDRESSBOOK.theList.render(ADDRESSBOOK.template, ADDRESSBOOK.AddressBookModel);
        };
        ADDRESSBOOK.AddressBookModel.fetch('address-list.json', callback);
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
                // console.log(ADDRESSBOOK.AddressBookModel);
                ADDRESSBOOK.AddressBookModel.data.push(getFullName());
                ADDRESSBOOK.theList.render(ADDRESSBOOK.template, ADDRESSBOOK.AddressBookModel);
            });
        };

        var init = (function(){
            bindEvents();
        })();
    },

    // Model used by FormView (Model is responsible for getting data from server)
    AddressBookModel: {
        data: [], //property
        fetch: function(url,callback){ //Method
            $.ajax(url).done(function(dataObject) {
                var dataArray = dataObject.addressData;

                ADDRESSBOOK.AddressBookModel.data = ADDRESSBOOK.AddressBookModel.data.concat(dataArray);
                callback();
            });
        }
    },

    // String so no capitisation
    template: "{{#data}}<dl><dt>{{first_name}}</dt><dd>{{last_name}}</dd></dl>{{/data}}",

    // View == controller (Responsible for rendering)
    ListView: function(listGen){
        this.render = function( template, model){
            var html = Mustache.to_html(template, model);
            listGen.html(html);
        };

    }
};
ADDRESSBOOK.init();