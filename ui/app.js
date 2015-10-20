
var deps = ['angularBootstrapNavTree', 'ui.router'];

if (angular.version.full.indexOf("1.2") >= 0) {
    deps.push('ngAnimate');
}
angular.module('myApp', deps)
/*
------------------------Configurations----------------------------
*/
    //.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //    $urlRouterProvider.otherwise('/home');
    //    $stateProvider
    //        .state('home', {
    //            url : '/home',
    //            views: {
    //                "main" : {
    //                    templateUrl : '/html/album.html',
    //                    controller : 'MainController'
    //                }
    //            }
    //        })
    //}])
/*
------------------------Controllers----------------------------
*/
    .controller('MainController', ['$rootScope', '$http', '$scope', function($rootScope, $http, $scope) {
        $scope.album = {};
        $scope.albums = [];
        $scope.content = '/html/album.html';
        $scope.selectImg = function($index, img) {
            var img = '<img src="/imgs/' + img + '" class="img-responsive"/>';
            //start of new code new code

            var html = '';
            html += img;
            html += '<div style="height:25px;clear:both;display:block;">';
            html += '<a class="controls next" href="'+ ($index+2) + '">next &raquo;</a>';
            html += '<a class="controls previous" href="' + ($index) + '">&laquo; prev</a>';
            html += '</div>';
            var show = $('#myModal');
            show.modal();
            show.on('shown.bs.modal', function(){
                $('#myModal .modal-body').html(html);
                $('a.controls').trigger('click');
            }).on('hidden.bs.modal', function(){
                $('#myModal .modal-body').html('');
            });
        };

        $scope.goUpload = function() {
            $scope.content = '/html/upload.html';
        };

        $scope.selectImage = function(img) {
            $scope.chosenPhoto = img;
        };

        $scope.getPhotos = function(year) {
            $http.get('/photos/'+year)
                .success(function(data, status, headers, config) {
                    $scope.album.title = data[0].albumName;
                    $scope.album.description = data[0].year;
                    $scope.album.photos = data;
                })
                .error(function(data, status, headers, config) {
                    $scope.album = {};
                });
        };

        $scope.getAlbums = function() {
            $http.get('/albums/')
                .success(function(data, status, headers, config) {
                    $scope.albums= data;
                    console.log("albums");
                    console.log(data);
                })
        };

        $scope.my_tree_handler = function(branch) {
            console.log('1');
             console.log(branch);
        };

        $scope.my_treedata = [{
            label: 'Languages',
            children: ['Jade','Less','Coffeescript']
        }];

        var apple_selected = function(branch) {
            console.log('2');
            console.log(branch);
            return $scope.output = "APPLE! : " + branch.label;
        };

        var treedata_avm = [
            {
                label: 'Animal',
                children: [
                    {
                        label: 'Dog',
                        data: {
                            description: "man's best friend"
                        }
                    }, {
                        label: 'Cat',
                        data: {
                            description: "Felis catus"
                        }
                    }, {
                        label: 'Hippopotamus',
                        data: {
                            description: "hungry, hungry"
                        }
                    }, {
                        label: 'Chicken',
                        children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                    }
                ]
            }, {
                label: 'Vegetable',
                data: {
                    definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
                    data_can_contain_anything: true
                },
                onSelect: function(branch) {
                    return $scope.output = "Vegetable: " + branch.data.definition;
                },
                children: [
                    {
                        label: 'Oranges'
                    }, {
                        label: 'Apples',
                        children: [
                            {
                                label: 'Granny Smith',
                                onSelect: apple_selected
                            }, {
                                label: 'Red Delicous',
                                onSelect: apple_selected
                            }, {
                                label: 'Fuji',
                                onSelect: apple_selected
                            }
                        ]
                    }
                ]
            }, {
                label: 'Mineral',
                children: [
                    {
                        label: 'Rock',
                        children: ['Igneous', 'Sedimentary', 'Metamorphic']
                    }, {
                        label: 'Metal',
                        children: ['Aluminum', 'Steel', 'Copper']
                    }, {
                        label: 'Plastic',
                        children: [
                            {
                                label: 'Thermoplastic',
                                children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                            }, {
                                label: 'Thermosetting Polymer',
                                children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                            }
                        ]
                    }
                ]
            }
        ];

        $scope.my_data = treedata_avm;

        $scope.getAlbums();
    }])
;

$(document).on('click', 'a.controls', function(){
    var index = $(this).attr('href');
    var src = $('ul.row li:nth-child('+ index +') img').attr('src');

    $('.modal-body img').attr('src', src);

    var newPrevIndex = parseInt(index) - 1;
    var newNextIndex = parseInt(newPrevIndex) + 2;

    if($(this).hasClass('previous')){
        $(this).attr('href', newPrevIndex);
        $('a.next').attr('href', newNextIndex);
    }else{
        $(this).attr('href', newNextIndex);
        $('a.previous').attr('href', newPrevIndex);
    }

    var total = $('ul.row li').length + 1;
    //hide next button
    if(total === newNextIndex){
        $('a.next').hide();
    }else{
        $('a.next').show()
    }
    //hide previous button
    if(newPrevIndex === 0){
        $('a.previous').hide();
    }else{
        $('a.previous').show()
    }


    return false;
});

var NavTree = angular.module('angularBootstrapNavTree', []);
var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

NavTree.directive('abnTree', [
    '$timeout', function($timeout) {
        return {
            restrict: 'E',
            template: "<ul class=\"nav nav-list nav-pills nav-stacked abn-tree\">\n  <li ng-repeat=\"row in tree_rows | filter:{visible:true} track by row.branch.uid\" ng-animate=\"'abn-tree-animate'\" ng-class=\"'level-' + {{ row.level }} + (row.branch.selected ? ' active':'') + ' ' +row.classes.join(' ')\" class=\"abn-tree-row\"><a ng-click=\"user_clicks_branch(row.branch)\"><i ng-class=\"row.tree_icon\" ng-click=\"row.branch.expanded = !row.branch.expanded\" class=\"indented tree-icon\"> </i><span class=\"indented tree-label\">{{ row.label }} </span></a></li>\n</ul>",
            replace: true,
            scope: {
                treeData: '=',
                onSelect: '&',
                initialSelection: '@',
                treeControl: '='
            },
            link: function(scope, element, attrs) {
                var error, expand_all_parents, expand_level, for_all_ancestors, for_each_branch, get_parent, n, on_treeData_change, select_branch, selected_branch, tree;
                error = function(s) {
                    console.log('ERROR:' + s);
                    debugger;
                    return void 0;
                };
                if (attrs.iconExpand == null) {
                    attrs.iconExpand = 'icon-plus  glyphicon glyphicon-plus  fa fa-plus';
                }
                if (attrs.iconCollapse == null) {
                    attrs.iconCollapse = 'icon-minus glyphicon glyphicon-minus fa fa-minus';
                }
                if (attrs.iconLeaf == null) {
                    attrs.iconLeaf = 'icon-file  glyphicon glyphicon-file  fa fa-file';
                }
                if (attrs.expandLevel == null) {
                    attrs.expandLevel = '3';
                }
                expand_level = parseInt(attrs.expandLevel, 10);
                if (!scope.treeData) {
                    alert('no treeData defined for the tree!');
                    return;
                }
                if (scope.treeData.length == null) {
                    if (treeData.label != null) {
                        scope.treeData = [treeData];
                    } else {
                        alert('treeData should be an array of root branches');
                        return;
                    }
                }
                for_each_branch = function(f) {
                    var do_f, root_branch, _i, _len, _ref, _results;
                    do_f = function(branch, level) {
                        var child, _i, _len, _ref, _results;
                        f(branch, level);
                        if (branch.children != null) {
                            _ref = branch.children;
                            _results = [];
                            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                                child = _ref[_i];
                                _results.push(do_f(child, level + 1));
                            }
                            return _results;
                        }
                    };
                    _ref = scope.treeData;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        root_branch = _ref[_i];
                        _results.push(do_f(root_branch, 1));
                    }
                    return _results;
                };
                selected_branch = null;
                select_branch = function(branch) {
                    if (!branch) {
                        if (selected_branch != null) {
                            selected_branch.selected = false;
                        }
                        selected_branch = null;
                        return;
                    }
                    if (branch !== selected_branch) {
                        if (selected_branch != null) {
                            selected_branch.selected = false;
                        }
                        branch.selected = true;
                        selected_branch = branch;
                        expand_all_parents(branch);
                        if (branch.onSelect != null) {
                            return $timeout(function() {
                                return branch.onSelect(branch);
                            });
                        } else {
                            if (scope.onSelect != null) {
                                return $timeout(function() {
                                    return scope.onSelect({
                                        branch: branch
                                    });
                                });
                            }
                        }
                    }
                };
                scope.user_clicks_branch = function(branch) {
                    if (branch !== selected_branch) {
                        return select_branch(branch);
                    }
                };
                get_parent = function(child) {
                    var parent;
                    parent = void 0;
                    if (child.parent_uid) {
                        for_each_branch(function(b) {
                            if (b.uid === child.parent_uid) {
                                return parent = b;
                            }
                        });
                    }
                    return parent;
                };
                for_all_ancestors = function(child, fn) {
                    var parent;
                    parent = get_parent(child);
                    if (parent != null) {
                        fn(parent);
                        return for_all_ancestors(parent, fn);
                    }
                };
                expand_all_parents = function(child) {
                    return for_all_ancestors(child, function(b) {
                        return b.expanded = true;
                    });
                };
                scope.tree_rows = [];
                on_treeData_change = function() {
                    var add_branch_to_list, root_branch, _i, _len, _ref, _results;
                    for_each_branch(function(b, level) {
                        if (!b.uid) {
                            return b.uid = "" + Math.random();
                        }
                    });
                    console.log('UIDs are set.');
                    for_each_branch(function(b) {
                        var child, _i, _len, _ref, _results;
                        if (angular.isArray(b.children)) {
                            _ref = b.children;
                            _results = [];
                            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                                child = _ref[_i];
                                _results.push(child.parent_uid = b.uid);
                            }
                            return _results;
                        }
                    });
                    scope.tree_rows = [];
                    for_each_branch(function(branch) {
                        var child, f;
                        if (branch.children) {
                            if (branch.children.length > 0) {
                                f = function(e) {
                                    if (typeof e === 'string') {
                                        return {
                                            label: e,
                                            children: []
                                        };
                                    } else {
                                        return e;
                                    }
                                };
                                return branch.children = (function() {
                                    var _i, _len, _ref, _results;
                                    _ref = branch.children;
                                    _results = [];
                                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                                        child = _ref[_i];
                                        _results.push(f(child));
                                    }
                                    return _results;
                                })();
                            }
                        } else {
                            return branch.children = [];
                        }
                    });
                    add_branch_to_list = function(level, branch, visible) {
                        var child, child_visible, tree_icon, _i, _len, _ref, _results;
                        if (branch.expanded == null) {
                            branch.expanded = false;
                        }
                        if (branch.classes == null) {
                            branch.classes = [];
                        }
                        if (!branch.noLeaf && (!branch.children || branch.children.length === 0)) {
                            tree_icon = attrs.iconLeaf;
                            if (__indexOf.call(branch.classes, "leaf") < 0) {
                                branch.classes.push("leaf");
                            }
                        } else {
                            if (branch.expanded) {
                                tree_icon = attrs.iconCollapse;
                            } else {
                                tree_icon = attrs.iconExpand;
                            }
                        }
                        scope.tree_rows.push({
                            level: level,
                            branch: branch,
                            label: branch.label,
                            classes: branch.classes,
                            tree_icon: tree_icon,
                            visible: visible
                        });
                        if (branch.children != null) {
                            _ref = branch.children;
                            _results = [];
                            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                                child = _ref[_i];
                                child_visible = visible && branch.expanded;
                                _results.push(add_branch_to_list(level + 1, child, child_visible));
                            }
                            return _results;
                        }
                    };
                    _ref = scope.treeData;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        root_branch = _ref[_i];
                        _results.push(add_branch_to_list(1, root_branch, true));
                    }
                    return _results;
                };
                scope.$watch('treeData', on_treeData_change, true);
                if (attrs.initialSelection != null) {
                    for_each_branch(function(b) {
                        if (b.label === attrs.initialSelection) {
                            return $timeout(function() {
                                return select_branch(b);
                            });
                        }
                    });
                }
                n = scope.treeData.length;
                console.log('num root branches = ' + n);
                for_each_branch(function(b, level) {
                    b.level = level;
                    return b.expanded = b.level < expand_level;
                });
                if (scope.treeControl != null) {
                    if (angular.isObject(scope.treeControl)) {
                        tree = scope.treeControl;
                        tree.expand_all = function() {
                            return for_each_branch(function(b, level) {
                                return b.expanded = true;
                            });
                        };
                        tree.collapse_all = function() {
                            return for_each_branch(function(b, level) {
                                return b.expanded = false;
                            });
                        };
                        tree.get_first_branch = function() {
                            n = scope.treeData.length;
                            if (n > 0) {
                                return scope.treeData[0];
                            }
                        };
                        tree.select_first_branch = function() {
                            var b;
                            b = tree.get_first_branch();
                            return tree.select_branch(b);
                        };
                        tree.get_selected_branch = function() {
                            return selected_branch;
                        };
                        tree.get_parent_branch = function(b) {
                            return get_parent(b);
                        };
                        tree.select_branch = function(b) {
                            select_branch(b);
                            return b;
                        };
                        tree.get_children = function(b) {
                            return b.children;
                        };
                        tree.select_parent_branch = function(b) {
                            var p;
                            if (b == null) {
                                b = tree.get_selected_branch();
                            }
                            if (b != null) {
                                p = tree.get_parent_branch(b);
                                if (p != null) {
                                    tree.select_branch(p);
                                    return p;
                                }
                            }
                        };
                        tree.add_branch = function(parent, new_branch) {
                            if (parent != null) {
                                parent.children.push(new_branch);
                                parent.expanded = true;
                            } else {
                                scope.treeData.push(new_branch);
                            }
                            return new_branch;
                        };
                        tree.add_root_branch = function(new_branch) {
                            tree.add_branch(null, new_branch);
                            return new_branch;
                        };
                        tree.expand_branch = function(b) {
                            if (b == null) {
                                b = tree.get_selected_branch();
                            }
                            if (b != null) {
                                b.expanded = true;
                                return b;
                            }
                        };
                        tree.collapse_branch = function(b) {
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                b.expanded = false;
                                return b;
                            }
                        };
                        tree.get_siblings = function(b) {
                            var p, siblings;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                p = tree.get_parent_branch(b);
                                if (p) {
                                    siblings = p.children;
                                } else {
                                    siblings = scope.treeData;
                                }
                                return siblings;
                            }
                        };
                        tree.get_next_sibling = function(b) {
                            var i, siblings;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                siblings = tree.get_siblings(b);
                                n = siblings.length;
                                i = siblings.indexOf(b);
                                if (i < n) {
                                    return siblings[i + 1];
                                }
                            }
                        };
                        tree.get_prev_sibling = function(b) {
                            var i, siblings;
                            if (b == null) {
                                b = selected_branch;
                            }
                            siblings = tree.get_siblings(b);
                            n = siblings.length;
                            i = siblings.indexOf(b);
                            if (i > 0) {
                                return siblings[i - 1];
                            }
                        };
                        tree.select_next_sibling = function(b) {
                            var next;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                next = tree.get_next_sibling(b);
                                if (next != null) {
                                    return tree.select_branch(next);
                                }
                            }
                        };
                        tree.select_prev_sibling = function(b) {
                            var prev;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                prev = tree.get_prev_sibling(b);
                                if (prev != null) {
                                    return tree.select_branch(prev);
                                }
                            }
                        };
                        tree.get_first_child = function(b) {
                            var _ref;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                if (((_ref = b.children) != null ? _ref.length : void 0) > 0) {
                                    return b.children[0];
                                }
                            }
                        };
                        tree.get_closest_ancestor_next_sibling = function(b) {
                            var next, parent;
                            next = tree.get_next_sibling(b);
                            if (next != null) {
                                return next;
                            } else {
                                parent = tree.get_parent_branch(b);
                                return tree.get_closest_ancestor_next_sibling(parent);
                            }
                        };
                        tree.get_next_branch = function(b) {
                            var next;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                next = tree.get_first_child(b);
                                if (next != null) {
                                    return next;
                                } else {
                                    next = tree.get_closest_ancestor_next_sibling(b);
                                    return next;
                                }
                            }
                        };
                        tree.select_next_branch = function(b) {
                            var next;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                next = tree.get_next_branch(b);
                                if (next != null) {
                                    tree.select_branch(next);
                                    return next;
                                }
                            }
                        };
                        tree.last_descendant = function(b) {
                            var last_child;
                            if (b == null) {
                                debugger;
                            }
                            n = b.children.length;
                            if (n === 0) {
                                return b;
                            } else {
                                last_child = b.children[n - 1];
                                return tree.last_descendant(last_child);
                            }
                        };
                        tree.get_prev_branch = function(b) {
                            var parent, prev_sibling;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                prev_sibling = tree.get_prev_sibling(b);
                                if (prev_sibling != null) {
                                    return tree.last_descendant(prev_sibling);
                                } else {
                                    parent = tree.get_parent_branch(b);
                                    return parent;
                                }
                            }
                        };
                        return tree.select_prev_branch = function(b) {
                            var prev;
                            if (b == null) {
                                b = selected_branch;
                            }
                            if (b != null) {
                                prev = tree.get_prev_branch(b);
                                if (prev != null) {
                                    tree.select_branch(prev);
                                    return prev;
                                }
                            }
                        };
                    }
                }
            }
        };
    }
]);
