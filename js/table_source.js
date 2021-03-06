//r - ready, d - develop, n - N/A, i - installed
let ukrBooklets = [
	["i", "i", "r", "r", "n"], //Лечебное дело
	["r", "r", "r", "n", "n"], //Стоматология
	["d", "r", "r", "n", "n"], //Фармация
	["n", "n", "n", "r", "r"], //Сестринское дело
	["n", "r", "n", "r", "n"], //Акушерское дело
	["n", "r", "n", "r", "n"], //Медико-профилактическое дело
	["n", "r", "r", "r", "r"], //Лабораторная диагностика
	["n", "r", "n", "n", "n"], //Мед психологія
	["n", "r", "n", "n", "n"], //Клінічна фармація
	["n", "r", "n", "n", "n"]  //Косметологія
];
let ukrBases = [
	["r", "r", "r", "d", "n"], //Лечебное дело
	["r", "r", "r", "n", "n"], //Стоматология
	["d", "r", "c", "n", "n"], //Фармация
	["n", "n", "n", "r", "r"], //Сестринское дело
	["n", "r", "n", "r", "n"], //Акушерское дело
	["n", "r", "n", "r", "n"], //Медико-профилактическое дело
	["n", "d", "r", "r", "d"], //Лабораторная диагностика
	["n", "d", "n", "n", "n"], //Мед психологія
	["n", "d", "n", "n", "n"], //Клінічна фармація
	["n", "d", "n", "n", "n"]  //Косметологія
];
let enBases = [
	["r", "r", "n", "n", "n"], //Лечебное дело
	["d", "d", "n", "n", "n"], //Стоматология
	["d", "d", "n", "n", "n"], //Фармация
	["n", "n", "n", "c", "c"], //Сестринское дело
	["n", "n", "n", "n", "n"], //Акушерское дело
	["n", "n", "n", "n", "n"], //Медико-профилактическое дело
	["n", "n", "n", "n", "n"], //Лабораторная диагностика
	["n", "n", "n", "n", "n"], //Мед психологія
	["n", "n", "n", "n", "n"], //Клінічна фармація
	["n", "n", "n", "n", "n"]  //Косметологія
];
let rusBooklets = [
	["i", "i", "n", "n", "n"], //Лечебное дело
	["r", "r", "n", "n", "n"], //Стоматология
	["d", "r", "n", "n", "n"], //Фармация
	["n", "n", "n", "n", "n"], //Сестринское дело
	["n", "n", "n", "n", "n"], //Акушерское дело
	["n", "n", "n", "n", "n"], //Медико-профилактическое дело
	["n", "n", "n", "n", "n"], //Лабораторная диагностика
	["n", "n", "n", "n", "n"], //Мед психологія
	["n", "n", "n", "n", "n"], //Клінічна фармація
	["n", "n", "n", "n", "n"]  //Косметологія
];

let rusBases = [
	["r", "r", "n", "n", "n"], //Лечебное дело
	["r", "r", "n", "n", "n"], //Стоматология
	["d", "r", "n", "n", "n"], //Фармация
	["n", "n", "n", "n", "n"], //Сестринское дело
	["n", "n", "n", "n", "n"], //Акушерское дело
	["n", "n", "n", "n", "n"], //Медико-профилактическое дело
	["n", "n", "n", "n", "n"], //Лабораторная диагностика
	["n", "n", "n", "n", "n"], //Мед психологія
	["n", "n", "n", "n", "n"], //Клінічна фармація
	["n", "n", "n", "n", "n"]  //Косметологія
];
let engBooklets = [
	["i", "i", "n", "n", "n"], //Лечебное дело
	["r", "r", "n", "n", "n"], //Стоматология
	["d", "r", "n", "n", "n"], //Фармация
	["n", "n", "n", "c", "c"], //Сестринское дело
	["n", "n", "n", "n", "n"], //Акушерское дело
	["n", "n", "n", "n", "n"], //Медико-профилактическое дело
	["n", "n", "n", "n", "n"], //Лабораторная диагностика
	["n", "n", "n", "n", "n"], //Мед психологія
	["n", "n", "n", "n", "n"], //Клінічна фармація
	["n", "n", "n", "n", "n"]  //Косметологія
];
let ukrSpecs = [
	"Лікувальна справа",
    "Стоматологія",
    "Фармація",
    "Сестринська справа",
    "Акушерська справа",
    "Медико-профілактична справа",
    "Лабораторна діагностика",
    "Медична психологія",
    "Клінічна фармація",
    "Технологія парфумерно-косметичних засобів"
];
let ruSpecs = [
	"Лечебное дело",
    "Стоматология",
    "Фармация",
    "Сестринское дело",
    "Акушерское дело",
    "Медико-профилактическое дело",
    "Лабораторная диагностика",
    "Медицинская психология",
    "Клиническая фармация",
    "Технология парфюмерно-косметических средств"
];
let enSpecs = [
	"Medicine",
    "Stomatology",
    "Pharmacy",
    "Nursering",
    "Obstetrics",
    "Preventive Medicine",
    "Laboratory Diagnostics",
    "Medical Psychology",
    "Clinical Pharmacy",
    "Technology of Perfume Cosmetics"
];
let ukrHeaders = [ "Спеціальність", "Екзамен", "К1", "К2", "К3", "КМ", "КБ", "ТЕСТОВІ БАЗИ", "ОФІЦІЙНІ БУКЛЕТИ" ];
let ruHeaders = [ "Специальность", "Экзамен", "К1", "К2", "К3", "КМ", "КБ", "ТЕСТОВЫЕ БАЗЫ", "ОФИЦИАЛЬНЫЕ БУКЛЕТЫ" ];
let enHeaders = [ "Speciality", "Exam", "К1", "К2", "К3", "КМ", "КB", "BASES OF TESTS", "OFFICIAL BOOKLETS" ];

let n_icon = '<svg class="table_cell_icon" viewBox="0 0 24 24">\n<path fill="#455a64" d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z" />\n</svg>'
let r_icon = '<svg class="table_cell_icon" viewBox="0 0 24 24">\n<path fill="#255d00" d="M19 18H6C3.79 18 2 16.21 2 14S3.79 10 6 10H6.71C7.37 7.69 9.5 6 12 6C15.04 6 17.5 8.46 17.5 11.5V12H19C20.66 12 22 13.34 22 15S20.66 18 19 18M19.35 10.03C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.03C2.34 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.03M10 17L6.5 13.5L7.91 12.08L10 14.17L14.59 9.59L16 11" />\n</svg>'
let i_icon = '<svg class="table_cell_icon" viewBox="0 0 24 24">\n<path fill="#004d40" d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z"/>\n</svg>'
let d_icon = '<svg class="table_cell_icon" viewBox="0 0 24 24">\n<path fill="#c43e00" d="M4 2A2 2 0 0 0 2 4V20A2 2 0 0 0 4 22H12.41A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 18 9.3V8L12 2H4M4 4H11V9H16A7 7 0 0 0 9 16A7 7 0 0 0 10.26 20H4V4M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12V17L18.61 19.16L19.36 17.94L16.5 16.25V12H15Z" />\n</svg>'
let c_icon = '<svg class="table_cell_icon" viewBox="0 0 24 24">\n<path fill="#7f0000" d="M8.27,3L3,8.27V15.73L8.27,21H15.73C17.5,19.24 21,15.73 21,15.73V8.27L15.73,3M9.1,5H14.9L19,9.1V14.9L14.9,19H9.1L5,14.9V9.1M9.12,7.71L7.71,9.12L10.59,12L7.71,14.88L9.12,16.29L12,13.41L14.88,16.29L16.29,14.88L13.41,12L16.29,9.12L14.88,7.71L12,10.59" />\n</svg>'
let cell = '<td style="background-color:!back!;text-align:center;border:2px solid white"><div style="width:100%; height:100%">'

function table_build(lang, ansistry, bookletesBool){
	let headers  = ukrHeaders;
	let cellsSource = engBooklets;
	let specs = ukrSpecs;
	switch(lang){
		case "ru":
			switch (ansistry){
				case "ukrainian":
					headers = ruHeaders;
					cellsSource = bookletesBool ? ukrBooklets : ukrBases;
					specs = ruSpecs;
					break;
				case "russian":
					headers = ruHeaders;
					cellsSource = bookletesBool ? rusBooklets : rusBases;
					specs = ruSpecs;
					break;
				case "english":
					headers = ruHeaders;
					cellsSource = bookletesBool ? engBooklets : enBases;
					specs = ruSpecs;
					break;
			}
			break;
		case "ua":
			switch (ansistry){
				case "ukrainian":
					headers = ukrHeaders;
					cellsSource = bookletesBool ? ukrBooklets : ukrBases;
					specs = ukrSpecs;
					break;
				case "russian":
					headers = ukrHeaders;
					cellsSource = bookletesBool ? rusBooklets : rusBases;
					specs = ukrSpecs;
					break;
				case "english":
					headers = ukrHeaders;
					cellsSource = bookletesBool ? engBooklets : enBases;
					specs = ukrSpecs;
					break;
			}
			break;
		case "en":
			switch (ansistry){
				case "ukrainian":
					headers = enHeaders;
					cellsSource = bookletesBool ? ukrBooklets : ukrBases;
					specs = enSpecs;
					break;
				case "russian":
					headers = enHeaders;
					cellsSource = bookletesBool ? rusBooklets : rusBases;
					specs = ukrSpecs;
					break;
				case "english":
					headers = enHeaders;
					cellsSource = bookletesBool ? engBooklets : enBases;
					specs = enSpecs;
					break;
			}
			break;
	}
	let content = '<caption><p class="poster_title" style="margin-left:8px">' + headers[bookletesBool ? 8 : 7] +'</p></caption><col style="width:45%;"><col style="width:11%;"><col style="width:11%;"><col style="width:11%;"><col style="width:11%;"><col style="width:11%;"><thead>' + 
		'<tr><td rowspan="2"style="text-align:center;border-right:2px solid #eceff1"><p class="description_text" style="margin:6px;padding: 0px;margin: 4px;font-weight:700">' + headers[0] +'</p></td><td colspan="5"style="text-align:center"><p class="description_text" style="margin:6px;padding: 0px;margin: 4px;font-weight:700">' + headers[1] +'</p></td></tr>' +
	 	'<tr>' + 
	 		'<td style="text-align:center;border-right:2px solid #eceff1"><p class="description_text" style="margin:6px;padding: 0px;margin: 4px">' + headers[2] +'</p></td><td style="text-align:center;border-right:2px solid #eceff1"><p class="description_text" style="margin:6px;padding: 0px;margin: 4px">' + headers[3] +'</p></td><td style="text-align:center;border-right:2px solid #eceff1"><p class="description_text" style="margin:6px;padding: 0px;margin: 4px;">' + headers[4] +'</p></td><td style="text-align:center;border-right:2px solid #eceff1"><p class="description_text" style="margin:6px;padding: 0px;margin: 4px">' + headers[5] +'</p></td><td style="text-align:center"><p class="description_text" style="margin:6px;padding: 0px;margin: 4px;">' + headers[6] +'</p></td></tr>' + 
	 	'</thead><tbody>';
	for(let i = 0; i < cellsSource.length; i++){
		content = content + '<tr><td style="border-top:2px solid #eceff1"><p class="description_text" style="margin:6px">' + specs[i] + '</p></td>';
		for(let j = 0 ; j < cellsSource.length; j++){
			switch(cellsSource[i][j]){
				case "i":
					content = "\n" + content + cell.replace(/!back!/i, "#b2dfdb") + "\n" + i_icon + "\n</div>\n</td>";
					break;
				case "c":
					content = "\n" + content + cell.replace(/!back!/i, "#ffa4a2") + "\n" + c_icon + "\n</div>\n</td>";
					break;	
				case "r":
					content = "\n" + content + cell.replace(/!back!/i, "#c5e1a5") + "\n" + r_icon + "\n</div>\n</td>";
					break;
				case "n":
					content = "\n" + content + cell.replace(/!back!/i, "#eceff1") + '\n<p class="description_text" style="font-weight: 600;    display: block;    color: #455a64;    margin: auto;    padding: 0px;    font-size: 12px;">N/A</p>\n</div>\n</td>';
					break;
				case "d":
					content = "\n" + content + cell.replace(/!back!/i, "#ffe082") + "\n" + d_icon + "\n</div>\n</td>";
					break;
			}
		}
		content = content + "\n</tr>"
	}
	content = content + "</tbody>"
	let div = document.createElement('table');
	div.style.width = "100%";
	div.style.borderCollapse = "collapse";
	div.style.marginBottom = "16px";
	div.id = bookletesBool ? "bookletes" : "bases";
	div.innerHTML = content;
	return div;
}