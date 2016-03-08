# server.R
#Title: Earthquake Visualization in Shiny
#Copyright: Fabio Veronesi

library(sp)
library(rjson)
library(RJSONIO)


shinyServer(function(input, output) {
    
    output$json <- reactive ({
        if(length(input$Earth)>0){
            if(input$Earth==1){
                hour <- read.table("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.csv", sep = ",", header = T)
                if(nrow(hour)>0){
                    lis <- list()
                    for(i in 1:nrow(hour)){
                        
                        if(hour$mag[i]<=2){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png"}
                        else if(hour$mag[i]>2&hour$mag[i]<=4){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_yellow.png"}
                        else if(hour$mag[i]>4&hour$mag[i]<=6){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_orange.png"}
                        else {icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png"}
                        
                        Date.hour <- substring(hour$time[i],1,10)
                        Time.hour <- substring(hour$time[i],12,23)
                        
                        lis[[i]] <- list(i,hour$longitude[i],hour$latitude[i],icon,hour$place[i],hour$depth[i],hour$mag[i],Date.hour,Time.hour)
                    }
                    
                    
                    #This code creates the variable test directly in javascript for export the grid in the Google Maps API
                    #I have taken this part from:http://stackoverflow.com/questions/26719334/passing-json-data-to-a-javascript-object-with-shiny
                    paste('<script>test=',
                    RJSONIO::toJSON(lis),
                    ';setAllMap();Cities_Markers();',
                    '</script>')
                }
            }
            
            else if(input$Earth==4){
                month <- read.table("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv", sep = ",", header = T)
                if(nrow(month)>0){
                    lis <- list()
                    for(i in 1:nrow(month)){
                        
                        if(month$mag[i]<=2){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png"}
                        else if(month$mag[i]>2&month$mag[i]<=4){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_yellow.png"}
                        else if(month$mag[i]>4&month$mag[i]<=6){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_orange.png"}
                        else {icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png"}
                        
                        Date.month <- substring(month$time[i],1,10)
                        Time.month <- substring(month$time[i],12,23)
                        
                        lis[[i]] <- list(i,month$longitude[i],month$latitude[i],icon,month$place[i],month$depth[i],month$mag[i],Date.month,Time.month)
                    }
                    
                    
                    #This code creates the variable test directly in javascript for export the grid in the Google Maps API
                    #I have taken this part from:http://stackoverflow.com/questions/26719334/passing-json-data-to-a-javascript-object-with-shiny
                    paste('<script>test=',
                    RJSONIO::toJSON(lis),
                    ';setAllMap();Cities_Markers();',
                    '</script>')
                }
            }
            
            
            else if(input$Earth==3){
                week <- read.table("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv", sep = ",", header = T)
                if(nrow(week)>0){
                    lis <- list()
                    for(i in 1:nrow(week)){
                        
                        if(week$mag[i]<=2){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png"}
                        else if(week$mag[i]>2&week$mag[i]<=4){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_yellow.png"}
                        else if(week$mag[i]>4&week$mag[i]<=6){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_orange.png"}
                        else {icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png"}
                        
                        Date.week <- substring(week$time[i],1,10)
                        Time.week <- substring(week$time[i],12,23)
                        
                        lis[[i]] <- list(i,week$longitude[i],week$latitude[i],icon,week$place[i],week$depth[i],week$mag[i],Date.week,Time.week)
                    }
                    
                    
                    #This code creates the variable test directly in javascript for export the grid in the Google Maps API
                    #I have taken this part from:http://stackoverflow.com/questions/26719334/passing-json-data-to-a-javascript-object-with-shiny
                    paste('<script>test=',
                    RJSONIO::toJSON(lis),        
                    ';setAllMap();Cities_Markers();',        
                    '</script>')  
                }  
            }  
            
            
            
            
            else {  
                day <- read.table("http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv", sep = ",", header = T)  
                if(nrow(day)>0){  
                    lis <- list()  
                    for(i in 1:nrow(day)){  
                        
                        if(day$mag[i]<=2){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png"}  
                        else if(day$mag[i]>2&day$mag[i]<=4){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_yellow.png"}  
                        else if(day$mag[i]>4&day$mag[i]<=6){icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_orange.png"}  
                        else {icon="http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png"}  
                        
                        Date.day <- substring(day$time[i],1,10)  
                        Time.day <- substring(day$time[i],12,23)  
                        
                        lis[[i]] <- list(i,day$longitude[i],day$latitude[i],icon,day$place[i],day$depth[i],day$mag[i],Date.day,Time.day)  
                    }  
                    
                    
                    #This code creates the variable test directly in javascript for export the grid in the Google Maps API  
                    #I have taken this part from:http://stackoverflow.com/questions/26719334/passing-json-data-to-a-javascript-object-with-shiny  
                    paste('<script>test=',         
                    RJSONIO::toJSON(lis),        
                    ';setAllMap();Cities_Markers();',        
                    '</script>')  
                }  
            }  
        }  
    })  
})