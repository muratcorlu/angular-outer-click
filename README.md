# angular-outer-click
Angular directive to handle outer click of an element

## Usage

```
<a ng-click="menuVisible!=menuVisible" outer-click="menuVisible=false">Menu</a>

<ul ng-show="menuVisible">
    <li>Some</li>
    <li>Menu</li>
    <li>Items</li>
</ul>
```

Also you can exclude an item with an id to not trigger the `outer-click` event.

```
<a ng-click="menuVisible!=menuVisible" outer-click="menuVisible=false" outer-click-exclude="menuDropdown">Menu</a>

<ul ng-show="menuVisible" id="menuDropdown">
    <li>Some</li>
    <li>Menu</li>
    <li>Items</li>
</ul>
```
