var sortedByLabel = new Map();


// contruct list-post component
///////////////////////////////////////////////////////////////////////
Vue.component('list-post', {
	template:`
		<div class="bg-light p-1 m-1 rounded">
				<a :href="post.url">
					{{post.title}}
				</a><br>
				<span style="font-size:11px"><em>{{ new Date(post.published).toLocaleDateString() }} | {{ post.author.displayName }}</em></span>
		</div> 
	`,
	props: {
    post: Object
  }
});


// contruct list-category component
///////////////////////////////////////////////////////////////////////
Vue.component('list-category', {
	template:`
		<div class="col-md-3">
			<h2 style="text-decoration:underline">{{ category }}</h2>
			<span v-if="!seen" style="font-size:11px">no post yet</span>
			<list-post v-if="seen" v-for="entry in entries" 
				:key="entry.id"
				:post="entry"
			>
			</list-post>
		</div>
	`,
	props:{
		seen: Boolean,
		entry: Object,
		entries: Array,
		category: String
	}

});

// construct Post-activity component
///////////////////////////////////////////////////////////////////////
Vue.component('post-activity', {
	data: function(){
		return {
			base_serv: "https://script.google.com/macros/s/AKfycby_ieCMCLP1DVbg5LHVKzkphfuxZR8B8P5y8GOtyiH1KKZ4vjUmZZAh3fzt3rBDuGq3/exec",
			bindLabels:[
				"News",
				"Announcement",
				"Publications"
			],
			labels: sortedByLabel
		}
	},
	template:`
		<div class="container">
			<div class="row">
				<list-category v-for="labelKey in bindLabels"
					:key="labelKey"
					:category="labelKey"
					:entries="labels.get(labelKey)"
					:seen="labelAvail(labelKey)"
				></list-category>
			</div>
		</div>
	`,
	props:{
		seen: Boolean,
		entries:Array
	},
	methods:{
		labelAvail: function(key){
			return (this.labelKeys).includes(key);
		},
		labelSort: function(data){
			var collection = new Map();
			data.map(e => {
                var labels = e.labels;
                if(labels && labels.length){
                    labels.map(c => {
                        if (collection.has(c)){
                            collection.get(c).push(e);
                        }else{
                            var newCol = collection.set(c,[]);
                            newCol.get(c).push(e);
                        }
                    });
                } else {
                    var c = "other";
                    if (collection.has(c)){
                        collection.get(c).push(e);
                    }else{
                        var newCol = collection.set(c,[]);
                        newCol.get(c).push(e);
                    }
                }
					
			});
			return collection;
		}
	},
	computed:{
		labelKeys: function(){
			let labels = this.labels
			return [...labels.keys()];
		}
	},
	created: function(){
		const req_server = this.base_serv+"?m=getPosts&id=";
		fetch(req_server)
		.then(response => response.json())
		.then(data => {
			if(data.items){
				this.labels = this.labelSort(data.items);
			}
		});
	}
});

// Build the instance
let vm = new Vue({
	el:"#blogapp"
});

