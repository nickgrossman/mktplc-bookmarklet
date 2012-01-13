

$(function() {
		function log( message ) {
			$( "<div/>" ).text( message ).prependTo( "#log" );
			$( "#log" ).scrollTop( 0 );
		}

		$( "#title" ).autocomplete({
			source: function( request, response ) {
				$.ajax({
					url: "http://marketplace.civiccommons.org/api/v1/views/application_api.jsonp",
					dataType: "jsonp",
					data: {
					  display_id: 'field_view',
						'filters[keywords]': request.term
					},
					success: function( data ) {
						response( $.map( data, function( item ) {
							return {
								label: item.node_title,
								value: item.node_title
							}
						}));
					}
				});
			},
			minLength: 2,
			select: function( event, ui ) {
				log( ui.item ?
					"Selected: " + ui.item.label :
					"Nothing selected, input was " + this.value);
			},
			open: function() {
				$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
			},
			close: function() {
				$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
			}
		});
	});