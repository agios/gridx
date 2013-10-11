define({
//Body
	loadingInfo: "Caricamento in corso...",
	emptyInfo: "Nessun elemento da visualizzare",
	loadFailInfo: "Impossibile caricare i dati.",
	loadMore: "Carica altro",
	loadMoreLoading: "Caricamento in corso...",
	loadPrevious: "Carica precedente",
	loadPreviousLoading: "Caricamento in corso...",

//FilterBar
	"clearFilterDialogTitle": "Cancella filtro",
	"filterDefDialogTitle": "Filtro",
	"defaultRuleTitle": "Regola",
	"ruleTitleTemplate": "Regola ${ruleNumber}",
	"noFilterApplied": "Nessun filtro applicato.",
	"defineFilter": "Definisci filtro",
	"conditionEqual": "uguale a",
	"conditionNotEqual": "non uguale a",
	"conditionLess": "minore di",
	"conditionLessEqual": "minore di o uguale a",
	"conditionGreater": "maggiore di",
	"conditionGreaterEqual": "maggiore di o uguale a",
	"conditionContain": "contiene",
	"conditionIs": "è",
	"conditionStartWith": "inizia con",
	"conditionEndWith": "finisce con",
	"conditionNotContain": "non contiene",
	"conditionIsNot": "non è",
	"conditionNotStartWith": "non inizia con",
	"conditionNotEndWith": "non finisce con",
	"conditionBefore": "prima",
	"conditionAfter": "dopo",
	"conditionRange": "intervallo",
	"conditionIsEmpty": "è vuoto",
	"all": "tutti",
	"any": "qualsiasi",
	"relationAll": "tutte le regole",
	"waiRelAll": "Confronta con tutte le seguenti regole:",
	"relationAny": "qualsiasi regola",
	"waiRelAny": "Confronta con qualsiasi delle seguenti regole:",
	"relationMsgFront": "Corrispondenza",
	"relationMsgTail": "",
	"and": "e",
	"or": "o",
	"addRuleButton": "Aggiungi regola",
	"waiAddRuleButton": "Aggiungi una nuova regola",
	"removeRuleButton": "Rimuovi regola",
	"waiRemoveRuleButtonTemplate": "Rimuovi regola ${0}",
	"addRuleButton": "Aggiungi regola filtro",
	"cancelButton": "Annulla",
	"waiCancelButton": "Annulla questa finestra di dialogo",
	"clearButton": "Cancella",
	"waiClearButton": "Cancella il filtro",
	"filterButton": "Filtro",
	"waiFilterButton": "Inoltra il filtro",
	"columnSelectLabel": "Colonna",
	"waiColumnSelectTemplate": "Colonna per la regola ${0}",
	"conditionSelectLabel": "Condizione",
	"waiConditionSelectTemplate": "Condizione per la regola ${0}",
	"valueBoxLabel": "Valore",
	"waiValueBoxTemplate": "Immettere il valore da filtrare per la regola ${0}",
	"rangeTo": "a",
	"rangeTemplate": "da ${0} a ${1}",
	"statusTipHeaderColumn": "Colonna",
	"statusTipHeaderCondition": "Regole",
	"statusTipTitle": "Barra di filtro",
	"statusTipMsg": "Fare clic sulla barra di filtro qui per filtrare sui valori in ${0}.",
	"anycolumn": "qualsiasi colonna",
	"statusTipTitleNoFilter": "Barra di filtro",
	"statusTipTitleHasFilter": "Filtro",
	"statusTipRelPre": "Corrispondenza",
	"statusTipRelPost": "regole.",
	"statusTipHeaderAll": "Corrispondenza totale delle regole.",
	"statusTipHeaderAny": "Qualsiasi corrispondenza regola.",
	"defaultItemsName": "elementi",
	"filterBarMsgHasFilterTemplate": "${0} di ${1} ${2} visualizzati.",
	"filterBarMsgNoFilterTemplate": "Nessun filtro applicato",
	"filterBarDefButton": "Definisci filtro",
	"waiFilterBarDefButton": "Filtra la tabella",
	"a11yFilterBarDefButton": "Filtro...",
	"filterBarClearButton": "Cancella filtro",
	"waiFilterBarClearButton": "Cancella il filtro",
	"closeFilterBarBtn": "Chiudi barra di filtro",
	"clearFilterMsg": "Il filtro verrà rimosso e verranno visualizzati tutti i record disponibili.",
	"anyColumnOption": "Qualsiasi colonna",
	"trueLabel": "Vero",
	"falseLabel": "Falso",
	"radioTrueLabel": "Valore Vero",
	"radioFalseLabel": "Valore Falso",
	"beginTimeRangeLabel": "Valore iniziale intervallo di tempo",
	"endTimeRangeLabel": "Valore finale intervallo di tempo",
	"beginDateRangeLabel": "Valore iniziale intervallo di date",
	"endDateRangeLabel": "Valore finale intervallo di date",
	"startsWithExpr": "${0}*",

//NestedSort
	singleSort: "Ordine singolo",
	nestedSort: "Ordine nidificato",
	ascending: "Fare clic per ordinare in ordine Ascendente",
	descending: "Fare clic per ordinare in ordine Discendente",
	sortingState: "${0} - ${1}",
	unsorted: "Non ordinare questa colonna",
	waiSingleSortLabel: "${0} - è ordinato in base a ${1}. Scegliere l'ordinamento in base a ${2}",
	waiNestedSortLabel:"${0} - è ordinato e nidificato in base a ${1}. Scegliere l'ordinamento nidificato in base a ${2}",

//PaginationBar
	pagerWai: 'Cercapersone',

	pageIndex: '${0}',
	pageIndexTitle: 'Pagina ${0}',

	firstPageTitle: 'Prima pagina',
	prevPageTitle: 'Pagina precedente',
	nextPageTitle: 'Pagina successiva',
	lastPageTitle: 'Ultima pagina',

	pageSize: '${0}',
	pageSizeTitle: '${0} elementi per pagina',
	pageSizeAll: 'Tutto',
	pageSizeAllTitle: 'Tutti gli elementi',

	description: '${0} - ${1} di ${2} elementi.',
	descriptionEmpty: 'La griglia è vuota.',

	summary: 'Totale: ${0}',
	summaryWithSelection: 'Totale: ${0} Selezionato: ${1}',

	gotoBtnTitle: 'Vai a una pagina specifica',

	gotoDialogTitle: 'Vai alla pagina',
	gotoDialogMainMsg: 'Specificare il numero di pagina:',
	gotoDialogPageCount: '(${0} pagine)',
	gotoDialogOKBtn: 'Vai',
	gotoDialogCancelBtn: 'Annulla',
	// for drop down pagination bar
	pageLabel: 'Pagina',
	pageSizeLabel: 'Righe',

//QuickFilter
	filterLabel: 'Filtro',
	clearButtonTitle: 'Cancella filtro',
	buildFilterMenuLabel: 'Crea filtro&hellip;',
	apply: 'Applica filtro',

//Sort
	helpMsg: '${0} - Fare clic per ordinare oppure control-clic per aggiungere all\'ordinamento',
	singleHelpMsg: '${0} - Fare clic per ordinare',
	priorityOrder: 'priorità di ordinamento ${0}',

//SummaryBar
	summaryTotal: 'Totale: ${0}',
	summarySelected: 'Selezionato: ${0}',
	summaryRange: 'Range: ${0}-${1}',	//need translation

//Other
	indirectSelectAll: "Press SPACE to select all.",	//need translation
	indirectDeselectAll: "Press SPACE to deselect all.",	//need translation
	treeExpanded: "Control + left arrow key to collapse this row.",	//need translation
	treeCollapsed: "Control + right arrow key to expand this row."	//need translation
});
