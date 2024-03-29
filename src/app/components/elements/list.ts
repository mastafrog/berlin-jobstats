import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
import { DataServices } from "../../services/data";

@Component({
    selector: "list",
    providers: [DataServices]
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template: `
    <div class="ui masthead vertical segment">
        <div class="ui container">
            <h1>List</h1>
            <p>Semantic UI list element <i class="icon external"></i>
            <a href="http://semantic-ui.com/elements/list.html" target="_blank">Semantic UI List</a></p>
        </div>
    </div>
    <div class="main ui container">
        <h4 class="ui header">Demo Normal</h4>
        <sm-list class="ui list">
            <sm-item *ngFor="#item of flatArray | async" class="item">{{item}}</sm-item>
        </sm-list>

        <h4 class="ui header">Code</h4>
        <div class="ui form">
            <div class="field">
                <textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-list class="ui list">
    <sm-item *ngFor="#item of flatArray" class="item">{ {item} }</sm-item>
</sm-list>
                </textarea>
            </div>
        </div>

        <h4 class="ui header">Demo Bulleted</h4>
        <sm-list class="ui list bulleted">
            <sm-item *ngFor="#item of flatArray | async" class="item">{{item}}</sm-item>
        </sm-list>

        <h4 class="ui header">Code</h4>
        <div class="ui form">
            <div class="field">
                <textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-list class="ui list bulleted">
    <sm-item *ngFor="#item of flatArray" class="item">{ {item} }</sm-item>
</sm-list>
                </textarea>
            </div>
        </div>

        <h4 class="ui header">Demo Ordered</h4>
        <sm-list class="ui list ordered">
            <sm-item *ngFor="#item of flatArray | async" class="item">{{item}}</sm-item>
        </sm-list>
        <h4 class="ui header">Code</h4>
        <div class="ui form">
            <div class="field">
                <textarea rows="4" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-list class="ui list ordered">
    <sm-item *ngFor="#item of flatArray" class="item">{ {item} }</sm-item>
</sm-list>
                </textarea>
            </div>
        </div>

        <h4 class="ui header">Demo avatar</h4>
        <sm-list class="ui list">
            <sm-item *ngFor="#item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</sm-item>
        </sm-list>
        <h4 class="ui header">Code</h4>
        <div class="ui form">
            <div class="field">
                <textarea rows="5" readonly class="code" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
<sm-list class="ui list">
    <sm-item *ngFor="#item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{ {item.date} }</sm-item>
</sm-list>
                </textarea>
            </div>
        </div>
        <div class="ui divider"></div>
        
        <h4 class="ui header">Demo avatar horizontal</h4>
        <sm-list class="ui list horizontal">
            <sm-item *ngFor="#item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</sm-item>
        </sm-list>
        <div class="ui divider"></div>
        
        <h4 class="ui header">Demo avatar horizontal ordered</h4>
        <sm-list class="ui list horizontal ordered">
            <sm-item *ngFor="#item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</sm-item>
        </sm-list>
        <div class="ui divider"></div>
        
        <h4 class="ui header">Demo avatar animated</h4>
        <sm-list class="ui list animated">
            <sm-item *ngFor="#item of usersArray | async" class="item" [image]="item.avatar" [header]="item.user">{{item.date}}</sm-item>
        </sm-list>

        <br/><br/>
        Page source: <a target="_blank" href="https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/list.ts">
        https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/list.ts
      </a>
    </div>
    `
})

export class ListComponent {
    flatArray: any;
    usersArray: any;

    constructor(public ds: DataServices) {
        this.flatArray = ds.array("flat");
        this.usersArray = ds.array("users");
    }
}
