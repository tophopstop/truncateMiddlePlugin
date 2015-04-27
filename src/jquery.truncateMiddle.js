(function ( $ ) {
 
    $.fn.truncateMiddle = function() {

        return this.each(function() {
        
            // get the text we want to truncate from the title attribute
            var text = $(this).attr('title');
    
            // make a hidden span at the end of the body that we can use
            // for checking sizes
            var $sizer = $('<span class="truncateMiddle" style="display:inline; visibility:hidden; padding:0"></span>');
    
            // actually append the node into body
            $('body').append($sizer);
    
            // get the width of the node where we want to truncate
            var width=$(this).width();
    
            // stuff the original text into the node
            $sizer.text( text );
    
            // get the size of the hidden span
            var checkWidth = $sizer.width();
    
            // a string to hold the end val
            var ret = text;
    
            // does it overflow out of the gate
            if( checkWidth > width ) {
        
                // counter for working in from the ends
                var count = 0;
            
                // reset check width to enter the while
                checkWidth = 0;
        
                // need to capture the output of last
                // run because we're gonna over shoot the
                // end
                var out;
        
                while( checkWidth < width ) {
            
                    // remember the last run
                    out = ret;
    
                    // grab the left part
                    var ls = text.substring(0,count);
                    // get rid of trailing space
                    ls=ls.replace(/\s$/,'');
                    // grab the right part
                    var rs = text.substring(text.length-count);
                    // get rid of leading space
                    rs = rs.replace(/^\s/,'');
            
                    // put the ellipsis in the middle
                    ret = ls + '...' + rs;
    
                    // ready grab more next time
                    count++;
               
                    // put the text back in the sizer
                    $sizer.text(ret);
                
                    // get the new width
                    checkWidth = $sizer.width();
                }
        
                // grab the last entry
                ret = out;
            }
    
            // stuff it back in the intended node
            $(this).text( ret);
    
            // get ride of the hidden span for checking sizes
            $sizer.remove();
    
        });
    }       
}( jQuery ));
