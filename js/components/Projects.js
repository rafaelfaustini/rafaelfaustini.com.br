'use strict';
Vue.component('projects', {
    props: {
        placeholder: { type: String },
    },
    data: function () {
        return {
            projects: [],
            filter: '',
        };
    },
    beforeMount() {
        this.getProjects();
    },
    methods: {
        setData(obj) {
            this.projects = obj.projects;
            this.placeholder = obj.placeholder;
        },
        onCachedLoaded(projects) {
            this.setData(projects.value);
        },

        getProjects() {
            LocalStorageJSONHandler.get('projects', this.onCachedLoaded);
            axios
                .get(Config.projectTextsPath)
                .then(
                    function (response) {
                        if (!response.data) {
                            throw 'Error while loading projects';
                        }
                        LocalStorageJSONHandler.set('projects', response.data);
                        this.setData(response.data);
                    }.bind(this)
                )
                .catch(
                    function (error) {
                        ExceptionHandler.handle(error);
                    }.bind(this)
                );
        },
    },
    computed: {
        filteredProjects: function () {
            if (!this.projects) {
                return [];
            }
            let result;
            if (this.filter) {
                result = this.projects.filter(item => {
                    let result = false;
                    for (var [, value] of Object.entries(item)) {
                        if (typeof value === 'string') {
                            result = result || value.toLowerCase().trim().includes(this.filter.toLowerCase().trim());
                        }
                    }
                    return result;
                });
            } else {
                result = this.projects;
            }
            let sortBy = [
                {
                    prop: 'year',
                    direction: -1,
                },
                {
                    prop: 'highlight',
                    direction: -1,
                },
                {
                    prop: 'title',
                    direction: 1,
                },
            ];
            return result.sort(function (a, b) {
                let i = 0,
                    result = 0;
                while (i < sortBy.length && result === 0) {
                    result = sortBy[i].direction * (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString() ? -1 : a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0);
                    i++;
                }
                return result;
            });
        },
    },
    template: `
<div data-cy="projects">
	<div class="container section">
		<div class="row">
			<div class="col-md-12 py-2">
				<div class="md-input">
					<input v-model="filter" data-cy="projects-search" required></input>
					<label data-cy="projects_placeholder">{{placeholder}}</label>
				</div>
			</div>
		</div>
		<div class="project-inner" data-cy="projects-inner" >
			<div class="pj" v-for="project in filteredProjects">
				<project :data="project"></project>
				<hr class="text-white">
			</div>
		</div>
	</div>
</div>
    `,
});
