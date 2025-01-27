jQuery(document).ready(function($) {
    $('#search').autocomplete({
        source: function(request, response) {
            $.ajax({
                url: ajax_search.ajaxurl,
                type: 'POST',
                dataType: 'json',
                data: {
                    action: 'search_suggestions',
                    query: request.term
                },
                success: function(data) {
                    response(data);
                }
            });
        },
        minLength: 2
    });
});
