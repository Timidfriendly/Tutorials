var PEEPS = {
    /* global $:false */
    /* function variables */

    init: function (options) {

        $($eventInitiator).click(function (event) {
            PEEPS.LoadData();
            PEEPS._showCheckboxes();
            event.preventDefault();
        });
    },


    LoadData: function () {
        $.ajax({
            type: "GET",
            url: url
            //dataType: json


        })
            .done(function (myJSON_Object) {
                PEEPS.Render(myJSON_Object);
            })
            .fail(function () {
                var errorMessage = '<h1>Data resource could not be located</h1><p><a href="mailto:email@admin.com">Please contact Support for further help</a></p>';
                $($returnedData).append(errorMessage);
            })
            .always(function () {
                PEEPS._wait(2000)
                    .then(function () {
                        if ($('.select-pulldown').length < 1) {
                            PEEPS._addSelect(); //.then allows then next function to wait until previous function is complete
                        }
                    })
                    .then(function () {
                        PEEPS.Sortby();
                        PEEPS.Filterby();
                    });
            });
    },

    collection: [],

    Render: function (myJSON_Object) {
        var theEmployess = [];
        PEEPS.collection = myJSON_Object.employees;
        // dataSetEmployees[0].firstName // outputs Anna


        $($returnedData).empty();
        $.each(PEEPS.collection, function (key, val) {
            theEmployess.push("<li id='employee-" + key + "'>" + "<b class='first-name'>" + val.firstName + "</b>" + "&#160;:&#160;" + "<span class='function " + val.role.toLowerCase() + "'>" + val.role + "</span>" + "</li>");
        });
        $('<ul>', {
            "class": "list-of-names",
            html: theEmployess.join("")
        }).appendTo($returnedData);
    },


    Sortby: function (by) {
        $("#sort-by").on('change', function () {
            var sortbyValue = $('#sort-by option:selected').val(),

            // person['firstname'] === person.firstname
                sortedPeepsCollection = _.sortBy(PEEPS.collection, function (person) {
                    return person[sortbyValue];
                });
            myJSON_Object = {
                "employees": sortedPeepsCollection // redefining the array employees
            };
            PEEPS.Render(myJSON_Object);
        });


    },

    Filterby: function () {
        var $checkboxes = $('.checkbox-inline input[type="checkbox"]');
        var theOriginalPEEPScollection = PEEPS.collection;
        $checkboxes.on('change', function () {
            var checkedRoles = [];
            $($checkboxes).each(function (index) {
                if ($(this).is(':checked')) {
                    var checkboxValue = $(this).val();
                    checkedRoles.push(checkboxValue);
                }
            });


            filterdPeepsCollection = _.filter(theOriginalPEEPScollection, function (person) {
                convertRoleName = function (checkboxValue) {
                    var convertedRoleName = checkboxValue.replace(/\s+/g, '-').toLowerCase(); // Replace space with dash and make all letters lower case
                    return convertedRoleName;
                };

                if (_.indexOf(checkedRoles, convertRoleName(person.role)) !== -1) {  // checks to see if the 'person.role' is present within the 'checkedRoles' array
                    return true; // returns the result of the if statement
                } else {
                    return false;
                }
            });


            myJSON_Object = {
                "employees": filterdPeepsCollection // redefining the array employees
            };
            PEEPS.Render(myJSON_Object);

        });
    },

    _addSelect: function () {
        var selectPulldown = '<div class="controls select-pulldown"><label><h3>Sort by role: </h3></label><select id="sort-by" name="select"><option value="null">choose a sort method</option><option value="firstName">First name</option><option value="role">Role</option></select></div>';
        $(PEEPS.options.$returnedData).prev().append(selectPulldown);
    },

    _showCheckboxes: function () {
        var $checkBoxes = $('.roles-wrapper').fadeIn();
    },

    _wait: function (ms) {
        var deferred = $.Deferred();
        setTimeout(deferred.resolve, ms);
        // We just need to return the promise not the whole deferred.
        return deferred.promise();
    }
};

PEEPS.init(
    [
        $eventInitiator = "#get-data",
        $returnedData = '#returned-data',
        url = "js/json/names2.json"
    ]
);