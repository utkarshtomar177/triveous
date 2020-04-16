APIs

Bookmarks:

/bookmark/create (POST): Accepts JSON  (POST) data 
ex: {
	"link": "link",
	"title": "titsle",
	"publisher": "publisher"
	
}

/bookmark/delete/:ID (GET) : takes ID and delete that bookmark

/bookmark/retrieve : will fetch all the bookmarks

Tags : 
/tags/retrieve : will retrieve all the tags
/tags/deleteByID/:ID : deletes a tag by ID
/tags/deleteByTitle/:title : deletes a tag by title

/tags/create (POST): Accepts JSON  (POST) data 
ex: {
	"title": "title",
}

/tags/delete-from-bookmark : accepts title / ID & tag in post format  and remove that particular tag from bookmark
{
	"id": 8,
	"tag": "98e"

} OR
{
	"title":"bookmark1,
	"tag": "98e"

}


/tags/add-to-bookmark : accepts title / ID in post format  and add  a  tag from a particular bookmark
{
	"id": 8,
	"tag": "98e"

}
{
	"title":"bookmark1,
	"tag": "98e"

}
