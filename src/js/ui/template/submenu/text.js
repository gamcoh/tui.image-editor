export default ({iconStyle: {normal, active}}) => (`
    <ul class="tui-image-editor-submenu-item">
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li>
            <div>
                <select name="text-font-family" id="tui-image-editor-select">
                    <option value="Noto Sans">Noto Sans</option>
                    <option value="Arial">Arial</option>
                    <option value="Serif">Serif</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Sans-Serif">Sans-Serif</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Palatino">Palatino</option>
                    <option value="Garamond">Garamond</option>
                    <option value="Bookman">Bookman</option>
                    <option value="Avant Garde">Avant Garde</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Comic Sans MS">Comic Sans MS</option>
                    <option value="Trebuchet MS">Trebuchet MS</option>
                </select>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li id="tie-text-effect-button">
            <div class="tui-image-editor-button bold">
                <div>
                    <svg class="svg_ic-submenu">
                    <use xlink:href="${normal.path}#${normal.name}-ic-text-bold" class="normal"/>
                    <use xlink:href="${active.path}#${active.name}-ic-text-bold" class="active"/>
                    </svg>
                </div>
                <label> Bold </label>
            </div>
            <div class="tui-image-editor-button italic">
                <div>
                    <svg class="svg_ic-submenu">
                    <use xlink:href="${normal.path}#${normal.name}-ic-text-italic" class="normal"/>
                    <use xlink:href="${active.path}#${active.name}-ic-text-italic" class="active"/>
                    </svg>
                </div>
                <label> Italic </label>
            </div>
            <div class="tui-image-editor-button underline">
                <div>
                    <svg class="svg_ic-submenu">
                        <use xlink:href="${normal.path}#${normal.name}-ic-text-underline"
                            class="normal"/>
                        <use xlink:href="${active.path}#${active.name}-ic-text-underline"
                            class="active"/>
                    </svg>
                </div>
                <label> Underline </label>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li id="tie-text-align-button">
            <div class="tui-image-editor-button left">
                <div>
                    <svg class="svg_ic-submenu">
                     <use xlink:href="${normal.path}#${normal.name}-ic-text-align-left"
                        class="normal"/>
                     <use xlink:href="${active.path}#${active.name}-ic-text-align-left"
                        class="active"/>
                    </svg>
                </div>
                <label> Left </label>
            </div>
            <div class="tui-image-editor-button center">
                <div>
                    <svg class="svg_ic-submenu">
                     <use xlink:href="${normal.path}#${normal.name}-ic-text-align-center"
                        class="normal"/>
                     <use xlink:href="${active.path}#${active.name}-ic-text-align-center"
                        class="active"/>
                    </svg>
                </div>
                <label> Center </label>
            </div>
            <div class="tui-image-editor-button right">
                <div>
                    <svg class="svg_ic-submenu">
                     <use xlink:href="${normal.path}#${normal.name}-ic-text-align-right"
                        class="normal"/>
                     <use xlink:href="${active.path}#${active.name}-ic-text-align-right"
                        class="active"/>
                    </svg>
                </div>
                <label> Right </label>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li>
            <div id="tie-text-color" title="Color"></div>
        </li>
        <li class="tui-image-editor-partition only-left-right">
            <div></div>
        </li>
        <li class="tui-image-editor-newline tui-image-editor-range-wrap">
            <label class="range">Text size</label>
            <div id="tie-text-range"></div>
            <input id="tie-text-range-value" class="tui-image-editor-range-value" value="0" />
        </li>
    </ul>
`);
