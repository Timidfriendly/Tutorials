var ADDRESSBOOK = {


    init: function() {
        ADDRESSBOOK.theList = new ADDRESSBOOK.ListView($("#list"));

        var callback = function(){ //callback works asynchroniously and renders page
            ADDRESSBOOK.theList.render(ADDRESSBOOK.template, ADDRESSBOOK.AddressBookModel);
        };

        ADDRESSBOOK.AddressBookModel.fetch('address-list.json', callback);
    },

    // View == controller
    FormView: function(){
        // Private variable because 'var, make it local scope
        var init = (function(){
            ADDRESSBOOK.AddressBookModel.data.push(getFullName());
            ADDRESSBOOK.theList.render(ADDRESSBOOK.template, ADDRESSBOOK.AddressBookModel);
        })();
    },

    // Model == used by FormView (Model is responsible for getting data from server)
    AddressBookModel: {
        data: [], //property
        fetch: function(url,callback){
            $.ajax(url)
                .done(function(dataObject) {
                var dataArray = dataObject.addressData;

                ADDRESSBOOK.AddressBookModel.data = ADDRESSBOOK.AddressBookModel.data.concat(dataArray);
                callback();
            });
        }
    },

    // Template == String so no capitisation
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