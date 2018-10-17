'use strict';

/**
 * @ngdoc function
 * @name homerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homerApp
 */
angular.module('homerApp')
  .controller('MainCtrl', function ($scope) {

    $scope.book = {id:6, lines: [
		{id:1,book:6, number:1, text:["Τρώων δ᾽ οἰώθη καὶ Ἀχαιῶν φύλοπις αἰνή·"], steadman:{page:1,remark:"δ᾽: δέ; elision, see box below ## οἰώθη: was abandoned; i.e. by the gods;3rd sg. aor. dep. οἰοόμαι"}},
		{id:2,book:6, number:2, text:["πολλὰ δ᾽ ἄρ᾽ ἔνθα καὶ ἔνθ᾽ ἴθυσε μάχη πεδίοιο"], steadman:{page:1,remark:"πολλὰ: many times, often; adverbial acc. ## ἔνθα καὶ ἔνθα: here and there ## πεδίοιο: on the plain; gen. place within"}},
		{id:3,book:6, number:3, text:["ἀλλήλων ἰθυνομένων χαλκήρεα δοῦρα"], steadman:{page:1,remark:"ἀλλήλων ἰθυνόμενων…δοῦρα: each side driving straight…; gen. absolute"}},
		{id:4,book:6, number:4, text:["μεσσηγὺς Σιμόεντος ἰδὲ Ξάνθοιο ῥοάων."], steadman:{page:1,remark:""}},
		{id:5,book:6, number:5, text:["Αἴας δὲ πρῶτος Τελαμώνιος, ἕρκος Ἀχαιῶν"], steadman:{page:1,remark:"ἕρκος Ἀχαιῶν: in apposition to Αἴας ## ῥῆξε: aor. ῥήγνμι (stem ῥηγ)"}},
		{id:6,book:6, number:6, text:["Τρώων ῥῆξε φάλαγγα, φόως δ᾽ ἑτάροισιν ἔθηκεν"], steadman:{page:1,remark:"φόως: acc.; i.e. a hole in the phalanx line ## ἔθηκε: made; aor. Τίθημι"}},
		{id:7,book:6, number:7, text:["ἄνδρα βαλὼν ὃς ἄριστος ἐνὶ Θρῄκεσσι τέτυκτο"], steadman:{page:1,remark:"βαλὼν: nom. sg. aor. pple βάλλω ## ὅς: who...; the antecedent is ἄνδρα ## ἐνὶ: among; ἐν, usual alternative spelling ## τέτυκτο: 3rd sg. plpf. τεύχω; this verb governs a nom. predicate ἄριστος"}},
		{id:8,book:6, number:8, text:["υἱὸν Ἐϋσσώρου, Ἀκάμαντ᾽ ἠΰν τε μέγαν τε."], steadman:{page:1,remark:"υἱὸν…: in apposition to ἄνδρα ## τε…τε: both…and"}},
		{id:9,book:6, number:9, text:["τόν ῥ᾽ ἔβαλε πρῶτος κόρυθος φάλον ἱπποδασείης"], steadman:{page:1,remark:"τὸν: him; this demonstrative, ‘this one,’ is very often translated as a personal pronoun"}},
		{id:10,book:6, number:10, text:["ἐν δὲ μετώπῳ πῆξε, πέρησε δ᾽ ἄρ᾽ ὀστέον εἴσω "], steadman:{page:1,remark:"πῆξε: aor. πήγνμι (stem ῥηγ); add obj."}},
		
		{id:11,book:6, number:11, text:["αἰχμὴ χαλκείη· τὸν δὲ σκότος ὄσσε κάλυψεν."], steadman:{page:2,remark:"τὸν: this one, him; again, a demonstrative which is translated as a personal pronoun ## ἔπεφνε: 3rd sg. aorist, θεινω"}},		
		{id:12,book:6, number:12, text:["Ἄξυλον δ᾽ ἄρ᾽ ἔπεφνε βοὴν ἀγαθὸς Διομήδης"], steadman:{page:2,remark:"βοὴν: in/at the battle cry; acc. of respect is common after an adj., here ἀγαθὸς ## ἔπεφνε: 3rd sg. aorist, θεινω"}},
		{id:13,book:6, number:13, text:["Τευθρανίδην, ὃς ἔναιεν ἐϋκτιμένῃ ἐν Ἀρίσβῃ"], steadman:{page:2,remark:"ὅς: who…; relative clause"}},
		{id:14,book:6, number:14, text:["ἀφνειὸς βιότοιο, φίλος δ᾽ ἦν ἀνθρώποισι·"], steadman:{page:2,remark:"ἦν: 3rd sg. impf. εἰμί"}},
		{id:15,book:6, number:15, text:["πάντας γὰρ φιλέεσκεν ὁδῷ ἔπι οἰκία ναίων."], steadman:{page:2,remark:"φιλέεσκεν: used to befriend, entertain; -σκ indicates iterative impf., see also line 19 ## ὁδῷ ἔπι: on the roadway; anastrophe"}},
		{id:16,book:6, number:16, text:["ἀλλά οἱ οὔ τις τῶν γε τότ᾽ ἤρκεσε λυγρὸν ὄλεθρον"], steadman:{page:2,remark:"οἱ: him; dat. obj. of ὑπαντιάσας ## τις τῶν γε: any of those; see page 8, partitive gen., refers to πάντας"}},
		{id:17,book:6, number:17, text:["πρόσθεν ὑπαντιάσας, ἀλλ᾽ ἄμφω θυμὸν ἀπηύρα,"], steadman:{page:2,remark:"ὑπαντιάσας: nom. sg. aor. pple ## ἄμφω θυμὸν: double acc. object ## ἀπηύρᾱ: ἀπ-ηύραε, 3rd sg. impf."}},
		{id:18,book:6, number:18, text:["αὐτὸν καὶ θεράποντα Καλήσιον, ὅς ῥα τόθ᾽ ἵππων"], steadman:{page:2,remark:"αὐτὸν: him and…; in apposition to ἄμφω ## τόθ᾽: τότε, elision before aspirated vowel"}},
		{id:19,book:6, number:19, text:["ἔσκεν ὑφηνίοχος· τὼ δ᾽ ἄμφω γαῖαν ἐδύτην."], steadman:{page:2,remark:"ἔσκεν: was; iterative impf. of εἰμί, cf. l. 15 ## τὼ: these; dual nom. pl., as ἄμφω; p. 3 ## ἐδύτην: went beneath; 3rd dual aor. δύω,‘entered,’ i.e. to the underworld, p. 24"}},
		{id:20,book:6, number:20, text:["Δρῆσον δ᾽ Εὐρύαλος καὶ Ὀφέλτιον ἐξενάριξε·"], steadman:{page:2,remark:"βοὴν: in/at the battle cry; acc. of respect is common after an adj., here ἀγαθὸς ## ἔπεφνε: 3rd sg. aorist, θεινω"}},
		
		{id:21,book:6, number:21, text:["βῆ δὲ μετ᾽ Αἴσηπον καὶ Πήδασον, οὕς ποτε νύμφη"], steadman:{page:3,remark:"βῆ: ἔβη, 3rd sg. aor. βαίνω, no augment ## μετ᾽: after…; μετὰ, i.e. in pursuit ## οὕς: acc. pl. relative pronoun"}},
		{id:22,book:6, number:22, text:["νηῒς Ἀβαρβαρέη τέκ᾽ ἀμύμονι Βουκολίωνι."], steadman:{page:3,remark:"τέκ᾽: τέκε, 3rd sg. aor. τίκτω, no augment ## βουκολίωνι: to…; dat. of interest"}},
		{id:23,book:6, number:23, text:["Βουκολίων δ᾽ ἦν υἱὸς ἀγαυοῦ Λαομέδοντος"], steadman:{page:3,remark:""}},
		{id:24,book:6, number:24, text:["πρεσβύτατος γενεῇ, σκότιον δέ ἑ γείνατο μήτηρ·"], steadman:{page:3,remark:"πρεσβύτατος: superlative ## γενεῇ: in…; dat. of respect, γενεή ## ἑ: him; 3rd sg. pronoun, acc. obj."}},
		{id:25,book:6, number:25, text:["ποιμαίνων δ᾽ ἐπ᾽ ὄεσσι μίγη φιλότητι καὶ εὐνῇ,"], steadman:{page:3,remark:"ἐπ᾽ὄεσσι: over the sheep; dat. pl. ## μίγη: he mingled; 3rd sg. aor. pass. dep. ## μίγνυμι, i.e. had sexual intercourse"}},
		{id:26,book:6, number:26, text:["ἣ δ᾽ ὑποκυσαμένη διδυμάονε γείνατο παῖδε."], steadman:{page:3,remark:"ἥ δ᾽: and she…; “this one” ## διδυμάονε...παῖδε: dual acc., see below"}},
		{id:27,book:6, number:27, text:["καὶ μὲν τῶν ὑπέλυσε μένος καὶ φαίδιμα γυῖα"], steadman:{page:3,remark:"τῶν: of these; demonstrative, i.e. twins ## μένος...γυῖα: neuter acc."}},
		{id:28,book:6, number:28, text:["Μηκιστηϊάδης καὶ ἀπ᾽ ὤμων τεύχε᾽ ἐσύλα."], steadman:{page:3,remark:"τεύχε᾽: τεύχεα; acc. pl. τὀ τεῦχος"}},
		{id:29,book:6, number:29, text:["Ἀστύαλον δ᾽ ἄρ᾽ ἔπεφνε μενεπτόλεμος Πολυποίτης·"], steadman:{page:3,remark:"ἔπεφνε: 3rd sg. aorist, θεινω"}},
		{id:30,book:6, number:30, text:["Πιδύτην δ᾽ Ὀδυσεὺς Περκώσιον ἐξενάριξεν"], steadman:{page:3,remark:""}},

		{id:31,book:6, number:31, text:["ἔγχεϊ χαλκείῳ, Τεῦκρος δ᾽ Ἀρετάονα δῖον."], steadman:{page:4,remark:"Τεῦκρος: add verb ἐξενάριξεν from l. 30"}},
		{id:32,book:6, number:32, text:["Ἀντίλοχος δ᾽ Ἄβληρον ἐνήρατο δουρὶ φαεινῷ"], steadman:{page:4,remark:"ἐνήρατο: aor. ἐναίρω"}},
		{id:33,book:6, number:33, text:["Νεστορίδης, Ἔλατον δὲ ἄναξ ἀνδρῶν Ἀγαμέμνων·"], steadman:{page:4,remark:"Ἀγαμέμνων: ellipsis, add ἐνήρατο, l. 32"}},
		{id:34,book:6, number:34, text:["ναῖε δὲ Σατνιόεντος ἐϋρρείταο παρ᾽ ὄχθας"], steadman:{page:4,remark:"ναῖε: impf., Elatus is subject; δέ suggests a change of subject from the previous line ## ἐϋρρείταο: gen. sg."}},
		{id:35,book:6, number:35, text:["Πήδασον αἰπεινήν. Φύλακον δ᾽ ἕλε Λήϊτος ἥρως"], steadman:{page:4,remark:"ἕλε: 3rd sg. aor. αἱρέω"}},
		{id:36,book:6, number:36, text:["φεύγοντ᾽· Εὐρύπυλος δὲ Μελάνθιον ἐξενάριξεν."], steadman:{page:4,remark:""}},
		{id:37,book:6, number:37, text:["Ἄδρηστον δ᾽ ἄρ᾽ ἔπειτα βοὴν ἀγαθὸς Μενέλαος"], steadman:{page:4,remark:"βοὴν: in/at the battle cry; acc. of respect again with ἀγαθὸς, see 6.12"}},
		{id:38,book:6, number:38, text:["ζωὸν ἕλ᾽· ἵππω γάρ οἱ ἀτυζομένω πεδίοιο"], steadman:{page:4,remark:"ἕλ᾽: ἕλε, see l. 35 above ## ἵππω, ἀτυζομένω, βλαφθέντε: dual nom. ## οἱ: his; ‘to him,’ dat. of possession πεδίοιο: within the plain; gen. of place within (type of partitive), see also 6.507"}},
		{id:39,book:6, number:39, text:["ὄζῳ ἔνι βλαφθέντε μυρικίνῳ ἀγκύλον ἅρμα"], steadman:{page:4,remark:"ὄζῳ ἔνι…μυρικίνῳ: preposition ἐν ## βλαφθέντε: hindered; dual aor. pass. pple"}},
		{id:40,book:6, number:40, text:["ἄξαντ᾽ ἐν πρώτῳ ῥυμῷ αὐτὼ μὲν ἐβήτην"], steadman:{page:4,remark:"ἄξαντε: dual aor. act. pple ἄγνυμι ## ἐν πρώτῳ ῥυμῷ: on the front of the pole, i.e. where the pole drawing the chariot attaches to the harness of the horses ## αὐτὼ μὲν: they on the one hand; dual aor. act. pple ἵππω, μὲν anticipates a contrast with αὐτὸς δὲ in 6.42 ## ἐβήτην: 3rd dual aor. βαίνω; see p. 24"}},
		
		{id:41,book:6, number:41, text:["πρὸς πόλιν, ᾗ περ οἱ ἄλλοι ἀτυζόμενοι φοβέοντο,"], steadman:{page:5,remark:"ᾗ περ: in which very place; place where"}},
		{id:42,book:6, number:42, text:["αὐτὸς δ᾽ ἐκ δίφροιο παρὰ τροχὸν ἐξεκυλίσθη"], steadman:{page:5,remark:"αὐτὸς δ: but he himself; see note l. 40 ## ἐξεκυλίσθη: 3rd sg. aor. pass. ἐκ-κυλίνδω"}},
		{id:43,book:6, number:43, text:["πρηνὴς ἐν κονίῃσιν ἐπὶ στόμα· πὰρ δέ οἱ ἔστη"], steadman:{page:5,remark:"ἐπὶ: onto…; acc. place to which ## πὰρ…οἱ: beside him: παρά + dat., sg. or an example of tmesis (‘cutting’ of the compound παρέστη into two words) and οἱ is the obj. of a compound verb ## ἔστη: 3rd sg. aor. ἵστημι"}},
		{id:44,book:6, number:44, text:["Ἀτρεΐδης Μενέλαος, ἔχων δολιχόσκιον ἔγχος."], steadman:{page:5,remark:"ἔχων: nom. sg. pres. pple ἔχω"}},
		{id:45,book:6, number:45, text:["Ἄδρηστος δ᾽ ἄρ᾽ ἔπειτα λαβὼν ἐλίσσετο γούνων·"], steadman:{page:5,remark:"λαβῶν: nom. sg. aor. pple λαμβάνω ## ἐλίσσετο: began to…; inchoative impf. ## γοὺνων: by…; partitive gen. with λαβῶν"}},
		{id:46,book:6, number:46, text:["‘ζώγρει, Ἀτρέος υἱέ, σὺ δ᾽ ἄξια δέξαι ἄποινα·"], steadman:{page:5,remark:"ζὼγρει: ζὼγρε-ε, note the accent: not 3rd sg. but sg. imperative ## υἱέ: vocative direct address ὑιός ## δέξαι: δέκσαι, aor. mid. imper. δέχομαι"}},
		{id:47,book:6, number:47, text:["πολλὰ δ᾽ ἐν ἀφνειοῦ πατρὸς κειμήλια κεῖται,"], steadman:{page:5,remark:"ἐν…πατρὸς: in… father’s (house) ## κεῖται: 3rd sg. with neut. pl. subject"}},
		{id:48,book:6, number:48, text:["χαλκός τε χρυσός τε πολύκμητός τε σίδηρος,"], steadman:{page:5,remark:"ἕλ᾽: ἕλε, see l. 35 above ## ἵππω, ἀτυζομένω, βλαφθέντε: dual nom. ## οἱ: his; ‘to him,’ dat. of possession πεδίοιο: within the plain; gen. of place within (type of partitive), see also 6.507"}},
		{id:49,book:6, number:49, text:["τῶν κέν τοι χαρίσαιτο πατὴρ ἀπερείσι᾽ ἄποινα"], steadman:{page:5,remark:"τῶν: of which (wealth); partitive gen. or possibly gen. of source ‘from which’ ## τοι: to you; dat. sg. alternative to σοι, τοι also frequently functions as a particle which means ‘to be sure,’ or ‘you know’ ## κὲν χαρίσαιτο… εἴ…πεπύθοιτο: he would grant…if he should learn; futureless-vivid condition (εἰ + opt., κέ/ἄν + opt), here with aor. optatives, χαρίζομαι, πυνθάνομαι; the κεν in the protasis εἰ κεν in line 48 is unnecessary and perhaps a repetition of κέν in the apodosis in line 49"}},
		{id:50,book:6, number:50, text:["εἴ κεν ἐμὲ ζωὸν πεπύθοιτ᾽ ἐπὶ νηυσὶν Ἀχαιῶν.᾽"], steadman:{page:5,remark:"ἐπὶ νηυσὶν: near the ships…; dat. pl."}}		
		
		]
				
	}
	
	$scope.bookSegmented = [];
	$scope.getStyle = function(occ){
		if ((occ.entry.frequency>20)&&$scope.frqMore20) return "frqMore20";
		if ((occ.entry.frequency>5)&&$scope.frqMore5) return "frqMore5";
		return null;
	};
		
	$scope.segment= function(){
		$scope.bookSegmented = JSON.parse(JSON.stringify($scope.book));
		$scope.bookSegmented.lines = $scope.bookSegmented.lines.map(function(verso){
			verso.text = verso.text[0].split(" ");	
			return verso;
		});		
		$scope.bookSegmented.lines = $scope.bookSegmented.lines.map(function(verso){
			verso.text = verso.text.map(function(o,index){	
				var ocurrence= {pos:index, text:o, entry:{word:o, meaning:"", frequency:""}};
				return ocurrence;				
			});
			return verso;
		});	
		$scope.bookSegmentedJSON = JSON.stringify($scope.bookSegmented);

	
	//book:{id:1, lines:[lines]}
				//line: {id:1, book:6, line:1, text:[ocurrences], remark:""}
												//ocurrence: {pos:1, text:"φεύγοντ᾽", entry:{word:"φεύγοντo", meaning:"", frequency:""}}
																
	}											
			
	$scope.bookSegmented={
			"id": 6,
			"lines": [{
				"id": 1,
				"book": 6,
				"number": 1,
				"text": [{
					"pos": 0,
					"text": "Τρώων",
					"entry": {
						"word": "Τρώς",
						"meaning": "Τρώς, Τρωός, ὁ: Trojan",
						"frequency": "46"
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δέ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 2,
					"text": "οἰώθη",
					"entry": {
						"word": "οἰόομαι",
						"meaning": "οἰόομαι: to be left behind, be abandoned",
						"frequency": "1"
					}
				}, {
					"pos": 3,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "καί: and; even, also",
						"frequency": "198"
					}
				}, {
					"pos": 4,
					"text": "Ἀχαιῶν",
					"entry": {
						"word": "Ἀχαιός",
						"meaning": "Ἀχαιός, ὁ: Achaian",
						"frequency": "30"
					}
				}, {
					"pos": 5,
					"text": "φύλοπις",
					"entry": {
						"word": "φύλοπις",
						"meaning": "φύλοπις, -ιδος, ἡ: battle-cry, din of battle",
						"frequency": "2"
					}
				}, {
					"pos": 6,
					"text": "αἰνή·",
					"entry": {
						"word": "αἰνός",
						"meaning": "αἰνός, -ή, -όν: terrible, dire, dread, grim",
						"frequency": "8"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "δ᾽: δέ; elision, see box below ## οἰώθη: was abandoned; i.e. by the gods;3rd sg. aor. dep. οἰοόμαι"
				}
			}, {
				"id": 2,
				"book": 6,
				"number": 2,
				"text": [{
					"pos": 0,
					"text": "πολλὰ",
					"entry": {
						"word": "πολύς",
						"meaning": "πολύς, πολλά, πολύ: much, many",
						"frequency": "35"
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δέ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 2,
					"text": "ἄρ᾽",
					"entry": {
						"word": "ἄρα",
						"meaning": "ἄρα: then, therefore, it seems, it turns out",
						"frequency": "68"
					}
				}, {
					"pos": 3,
					"text": "ἔνθα",
					"entry": {
						"word": "ἔνθα",
						"meaning": "ἔνθα: there, thither; then, at that time",
						"frequency": "17"
					}
				}, {
					"pos": 4,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "καί: and; even, also",
						"frequency": "198"
					}
				}, {
					"pos": 5,
					"text": "ἔνθ᾽",
					"entry": {
						"word": "ἔνθ᾽",
						"meaning": "ἔνθα: there, thither; then, at that time",
						"frequency": "17"
					}
				}, {
					"pos": 6,
					"text": "ἴθυσε",
					"entry": {
						"word": "ἴθυσε",
						"meaning": "ἰθύω: to go straight, press on",
						"frequency": "1"
					}
				}, {
					"pos": 7,
					"text": "μάχη",
					"entry": {
						"word": "μάχη",
						"meaning": "μάχη, ἡ: battle, fight, combat",
						"frequency": "6"
					}
				}, {
					"pos": 8,
					"text": "πεδίοιο",
					"entry": {
						"word": "πεδίον",
						"meaning": "πεδίον, τό: a plain",
						"frequency": "11"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "πολλὰ: many times, often; adverbial acc. ## ἔνθα καὶ ἔνθα: here and there ## πεδίοιο: on the plain; gen. place within"
				}
			}, {
				"id": 3,
				"book": 6,
				"number": 3,
				"text": [{
					"pos": 0,
					"text": "ἀλλήλων",
					"entry": {
						"word": "ἀλλήλων",
						"meaning": "ἀλλήλων, -λοις, -λους: one another",
						"frequency": "11"
					}
				}, {
					"pos": 1,
					"text": "ἰθυνομένων",
					"entry": {
						"word": "ἰθύνω",
						"meaning": "ἰθύνω: to guide or drive straight, direct",
						"frequency": "1"
					}
				}, {
					"pos": 2,
					"text": "χαλκήρεα",
					"entry": {
						"word": "χαλκήρης",
						"meaning": "χαλκήρης, -ες: fitted with bronze",
						"frequency": "1"
					}
				}, {
					"pos": 3,
					"text": "δοῦρα",
					"entry": {
						"word": "δόρυ",
						"meaning": "δόρυ, δουρός, τό: spear, tree, stem",
						"frequency": "10"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "ἀλλήλων ἰθυνόμενων…δοῦρα: each side driving straight…; gen. absolute"
				}
			}, {
				"id": 4,
				"book": 6,
				"number": 4,
				"text": [{
					"pos": 0,
					"text": "μεσσηγὺς",
					"entry": {
						"word": "μεσσηγὺς",
						"meaning": "μεσσηγύς: in the middle, between (gen)",
						"frequency": "1"
					}
				}, {
					"pos": 1,
					"text": "Σιμόεντος",
					"entry": {
						"word": "Σιμόεις",
						"meaning": "Σιμόεις, -όεντος, ὁ: Simois river",
						"frequency": "1"
					}
				}, {
					"pos": 2,
					"text": "ἰδὲ",
					"entry": {
						"word": "ἰδὲ",
						"meaning": "ἰδέ: and",
						"frequency": "3"
					}
				}, {
					"pos": 3,
					"text": "Ξάνθοιο",
					"entry": {
						"word": "Ξανθός",
						"meaning": "Ξανθός, ὁ: Xanthus river",
						"frequency": "2"
					}
				}, {
					"pos": 4,
					"text": "ῥοάων.",
					"entry": {
						"word": "ῥοή.",
						"meaning": "ῥοή, ἡ: river, stream, flow",
						"frequency": "1"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": ""
				}
			}, {
				"id": 5,
				"book": 6,
				"number": 5,
				"text": [{
					"pos": 0,
					"text": "Αἴας",
					"entry": {
						"word": "Αἴας",
						"meaning": "Αἴας, -αντος, ὁ: Ajax",
						"frequency": "2"
					}
				}, {
					"pos": 1,
					"text": "δὲ",
					"entry": {
						"word": "δὲ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 2,
					"text": "πρῶτος",
					"entry": {
						"word": "πρῶτος",
						"meaning": "πρῶτος, -η, -ον: first, earliest; foremost",
						"frequency": "11"
					}
				}, {
					"pos": 3,
					"text": "Τελαμώνιος,",
					"entry": {
						"word": "Τελαμώνιος,",
						"meaning": "Τελαμώνιος, ὁ: son of Telamon",
						"frequency": "1"
					}
				}, {
					"pos": 4,
					"text": "ἕρκος",
					"entry": {
						"word": "ἕρκος",
						"meaning": "ἕρκος, τό: fence, wall",
						"frequency": "1"
					}
				}, {
					"pos": 5,
					"text": "Ἀχαιῶν",
					"entry": {
						"word": "Ἀχαιός",
						"meaning": "Ἀχαιός, ὁ: Achaian",
						"frequency": "30"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "ἕρκος Ἀχαιῶν: in apposition to Αἴας ## ῥῆξε: aor. ῥήγνμι (stem ῥηγ)"
				}
			}, {
				"id": 6,
				"book": 6,
				"number": 6,
				"text": [{
					"pos": 0,
					"text": "Τρώων",
					"entry": {
						"word": "Τρώς",
						"meaning": "Τρώς, Τρωός, ὁ: Trojan",
						"frequency": "46"
					}
				}, {
					"pos": 1,
					"text": "ῥῆξε",
					"entry": {
						"word": "ῥήγνυμι",
						"meaning": "ῥήγνυμι: to break, burst, rend",
						"frequency": "1"
					}
				}, {
					"pos": 2,
					"text": "φάλαγγα",
					"entry": {
						"word": "φάλαγξ",
						"meaning": "φάλαγξ, φάλαγγος: phalanx, line of battle",
						"frequency": "2"
					}
				}, {
					"pos": 3,
					"text": "φόως",
					"entry": {
						"word": "φόως",
						"meaning": "φόως, τό: light, daylight (φῶς)",
						"frequency": "1"
					}
				}, {
					"pos": 4,
					"text": "δ᾽",
					"entry": {
						"word": "δέ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 5,
					"text": "ἑτάροισιν",
					"entry": {
						"word": "ἑταῖρος",
						"meaning": "ἑταῖρος, ὁ (ἕταρος): comrade, companion",
						"frequency": "5"
					}
				}, {
					"pos": 6,
					"text": "ἔθηκεν",
					"entry": {
						"word": "τίθημι",
						"meaning": "τίθημι: to make; set, put, place, arrange",
						"frequency": "16"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "φόως: acc.; i.e. a hole in the phalanx line ## ἔθηκε: made; aor. Τίθημι"
				}
			}, {
				"id": 7,
				"book": 6,
				"number": 7,
				"text": [{
					"pos": 0,
					"text": "ἄνδρα",
					"entry": {
						"word": "ἀνήρ",
						"meaning": "ἀνήρ, ἀνδρός, ὁ: a man",
						"frequency": "39"
					}
				}, {
					"pos": 1,
					"text": "βαλὼν",
					"entry": {
						"word": "βάλλω",
						"meaning": "βάλλω: to throw, shoot, hit, strike",
						"frequency": "8"
					}
				}, {
					"pos": 2,
					"text": "ὃς",
					"entry": {
						"word": "ὃς",
						"meaning": "ὅς, ἥ, ὅ: who, which, that",
						"frequency": "205"
					}
				}, {
					"pos": 3,
					"text": "ἄριστος",
					"entry": {
						"word": "ἄριστος",
						"meaning": "ἄριστος, -η, -ον: best, most excellent",
						"frequency": "9"
					}
				}, {
					"pos": 4,
					"text": "ἐνὶ",
					"entry": {
						"word": "ἐνὶ",
						"meaning": "ἐν: in, on, among. (+ dat.)",
						"frequency": "79"
					}
				}, {
					"pos": 5,
					"text": "Θρῄκεσσι",
					"entry": {
						"word": "Θρῇξ",
						"meaning": "Θρῇξ, Θρῆκός, ὁ: Thracian",
						"frequency": "1"
					}
				}, {
					"pos": 6,
					"text": "τέτυκτο",
					"entry": {
						"word": "τεύχω",
						"meaning": "τεύχω: to make, build, construct, prepare",
						"frequency": "7"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "βαλὼν: nom. sg. aor. pple βάλλω ## ὅς: who...; the antecedent is ἄνδρα ## ἐνὶ: among; ἐν, usual alternative spelling ## τέτυκτο: 3rd sg. plpf. τεύχω; this verb governs a nom. predicate ἄριστος"
				}
			}, {
				"id": 8,
				"book": 6,
				"number": 8,
				"text": [{
					"pos": 0,
					"text": "υἱὸν",
					"entry": {
						"word": "υἱός",
						"meaning": "υἱός, -οῦ, ὁ: a son",
						"frequency": "24"
					}
				}, {
					"pos": 1,
					"text": "Ἐϋσσώρου,",
					"entry": {
						"word": "Ἐϋσσῶρος,",
						"meaning": "Ἐϋσσῶρος, ὁ: Eüssorus",
						"frequency": "1"
					}
				}, {
					"pos": 2,
					"text": "Ἀκάμαντ᾽",
					"entry": {
						"word": "Ἀκάμας",
						"meaning": "Ἀκάμας, -αντος, ὁ: Acamas",
						"frequency": "1"
					}
				}, {
					"pos": 3,
					"text": "ἠΰν",
					"entry": {
						"word": "ἠῢς",
						"meaning": "ἠῢς, ἠῢ (ἐῢς, ἐῢ): noble, good",
						"frequency": "1"
					}
				}, {
					"pos": 4,
					"text": "τε",
					"entry": {
						"word": "τε",
						"meaning": "τε: and, both",
						"frequency": "145"
					}
				}, {
					"pos": 5,
					"text": "μέγαν",
					"entry": {
						"word": "μέγαν",
						"meaning": "μέγας, μεγάλη, μέγα: big, great, important",
						"frequency": "35"
					}
				}, {
					"pos": 6,
					"text": "τε.",
					"entry": {
						"word": "τε.",
						"meaning": "τε: and, both",
						"frequency": "145"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "υἱὸν…: in apposition to ἄνδρα ## τε…τε: both…and"
				}
			}, {
				"id": 9,
				"book": 6,
				"number": 9,
				"text": [{
					"pos": 0,
					"text": "τόν",
					"entry": {
						"word": "τόν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "ῥ᾽",
					"entry": {
						"word": "ῥ᾽",
						"meaning": "ἄρα: then, therefore, it seems, it turns out",
						"frequency": "68"
					}
				}, {
					"pos": 2,
					"text": "ἔβαλε",
					"entry": {
						"word": "βάλλω",
						"meaning": "βάλλω: to throw, shoot, hit, strike",
						"frequency": "8"
					}
				}, {
					"pos": 3,
					"text": "πρῶτος",
					"entry": {
						"word": "πρῶτος",
						"meaning": "πρῶτος, -η, -ον: first, earliest; foremost",
						"frequency": "11"
					}
				}, {
					"pos": 4,
					"text": "κόρυθος",
					"entry": {
						"word": "κόρυς",
						"meaning": "κόρυς, κόρυθος ἡ: helmet",
						"frequency": "5"
					}
				}, {
					"pos": 5,
					"text": "φάλον",
					"entry": {
						"word": "φάλος",
						"meaning": "φάλος, ὁ: ridge of the helmet (for a plume)",
						"frequency": "1"
					}
				}, {
					"pos": 6,
					"text": "ἱπποδασείης",
					"entry": {
						"word": "ἱπποδάσεια",
						"meaning": "ἱππο-δάσεια, ἡ: bushy with horse-hair",
						"frequency": "1"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "τὸν: him; this demonstrative, ‘this one,’ is very often translated as a personal pronoun"
				}
			}, {
				"id": 10,
				"book": 6,
				"number": 10,
				"text": [{
					"pos": 0,
					"text": "ἐν",
					"entry": {
						"word": "ἐν",
						"meaning": "ἐν: in, on, among. (+ dat.)",
						"frequency": "79"
					}
				}, {
					"pos": 1,
					"text": "δὲ",
					"entry": {
						"word": "δὲ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 2,
					"text": "μετώπῳ",
					"entry": {
						"word": "μέτωπον",
						"meaning": "μέτ-ωπον, τό: forehead, between the eyes",
						"frequency": "1"
					}
				}, {
					"pos": 3,
					"text": "πῆξε,",
					"entry": {
						"word": "πήγνυμι",
						"meaning": "πήγνυμι: to stick, fix",
						"frequency": "4"
					}
				}, {
					"pos": 4,
					"text": "πέρησε",
					"entry": {
						"word": "περάω",
						"meaning": "περάω: to cross, traverse, pass through",
						"frequency": "1"
					}
				}, {
					"pos": 5,
					"text": "δ᾽",
					"entry": {
						"word": "δέ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 6,
					"text": "ἄρ᾽",
					"entry": {
						"word": "ἄρα",
						"meaning": "ἄρα: then, therefore, it seems, it turns out",
						"frequency": "68"
					}
				}, {
					"pos": 7,
					"text": "ὀστέον",
					"entry": {
						"word": "ὀστέον",
						"meaning": "ὀστέον, τό: bone",
						"frequency": "1"
					}
				}, {
					"pos": 8,
					"text": "εἴσω",
					"entry": {
						"word": "εἴσω",
						"meaning": "εἴσω: inside, within; into, to within",
						"frequency": "4"
					}
				}],
				"steadman": {
					"page": 1,
					"remark": "πῆξε: aor. πήγνμι (stem ῥηγ); add obj."
				}
			}, {
				"id": 11,
				"book": 6,
				"number": 11,
				"text": [{
					"pos": 0,
					"text": "αἰχμὴ",
					"entry": {
						"word": "αἰχμὴ",
						"meaning": "αἰχμή, ἡ: spearpoint",
						"frequency": "3"
					}
				}, {
					"pos": 1,
					"text": "χαλκείη·",
					"entry": {
						"word": "χαλκείη·",
						"meaning": "χάλκειος, -εα, -εον: bronze, brazen, copper",
						"frequency": "4"
					}
				}, {
					"pos": 2,
					"text": "τὸν",
					"entry": {
						"word": "τὸν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "δὲ",
					"entry": {
						"word": "δὲ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 4,
					"text": "σκότος",
					"entry": {
						"word": "σκότος",
						"meaning": "σκότος, ὁ: darkness, gloom",
						"frequency": "1"
					}
				}, {
					"pos": 5,
					"text": "ὄσσε",
					"entry": {
						"word": "ὄσσε",
						"meaning": "ὄσσε: (two) eyes (neuter dual)",
						"frequency": "1"
					}
				}, {
					"pos": 6,
					"text": "κάλυψεν.",
					"entry": {
						"word": "καλύπτω",
						"meaning": "καλύπτω: to conceal, cover",
						"frequency": "5"
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "τὸν: this one, him; again, a demonstrative which is translated as a personal pronoun ## ἔπεφνε: 3rd sg. aorist, θεινω"
				}
			}, {
				"id": 12,
				"book": 6,
				"number": 12,
				"text": [{
					"pos": 0,
					"text": "Ἄξυλον",
					"entry": {
						"word": "Ἄξυλος",
						"meaning": "Ἄξυλος, ὁ: Axylus,",
						"frequency": "1"
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δὲ",
						"meaning": "δέ: but, and, on the other hand",
						"frequency": "405"
					}
				}, {
					"pos": 2,
					"text": "ἄρ᾽",
					"entry": {
						"word": "ἄρα",
						"meaning": "ἄρα: then, therefore, it seems, it turns out",
						"frequency": "68"
					}
				}, {
					"pos": 3,
					"text": "ἔπεφνε",
					"entry": {
						"word": "θείνω",
						"meaning": "θείνω: to slay; strike, wound (aor. ἔπεφνα)",
						"frequency": "5"
					}
				}, {
					"pos": 4,
					"text": "βοὴν",
					"entry": {
						"word": "βοὴν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἀγαθὸς",
					"entry": {
						"word": "ἀγαθὸς",
						"meaning": "ἀγαθός, -ή, -όν: good, brave, noble",
						"frequency": "6"
					}
				}, {
					"pos": 6,
					"text": "Διομήδης",
					"entry": {
						"word": "Διομήδης",
						"meaning": "Διομήδης, -εος, ὁ: Diomedes",
						"frequency": "5"
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "βοὴν: in/at the battle cry; acc. of respect is common after an adj., here ἀγαθὸς ## ἔπεφνε: 3rd sg. aorist, θεινω"
				}
			}, {
				"id": 13,
				"book": 6,
				"number": 13,
				"text": [{
					"pos": 0,
					"text": "Τευθρανίδην,",
					"entry": {
						"word": "Τευθρανίδης",
						"meaning": "Τευθρανίδης, ὁ: son of Teuthras",
						"frequency": "1"
					}
				}, {
					"pos": 1,
					"text": "ὃς",
					"entry": {
						"word": "ὃς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἔναιεν",
					"entry": {
						"word": "ναίω",
						"meaning": "ναίω: to inhabit, dwell, live, abide",
						"frequency": "5"
					}
				}, {
					"pos": 3,
					"text": "ἐϋκτιμένῃ",
					"entry": {
						"word": "ἐϋκτίμενος",
						"meaning": "ἐϋ-κτίμενος -η -ον: well-built, -constructed",
						"frequency": "2"
					}
				}, {
					"pos": 4,
					"text": "ἐν",
					"entry": {
						"word": "ἐν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "Ἀρίσβῃ",
					"entry": {
						"word": "Ἀρίσβῃ",
						"meaning": "Ἀρίσβη, ἡ: Arisbe",
						"frequency": "1"
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "ὅς: who…; relative clause"
				}
			}, {
				"id": 14,
				"book": 6,
				"number": 14,
				"text": [{
					"pos": 0,
					"text": "ἀφνειὸς",
					"entry": {
						"word": "ἀφνειὸς",
						"meaning": "ἀφνειός, -όν: wealthy, rich in (gen.)",
						"frequency": "2"
					}
				}, {
					"pos": 1,
					"text": "βιότοιο,",
					"entry": {
						"word": "βίοτος",
						"meaning": "βίοτος, ὁ: life, livelihood, goods; property",
						"frequency": "1"
					}
				}, {
					"pos": 2,
					"text": "φίλος",
					"entry": {
						"word": "φίλος",
						"meaning": "φιλέω: to love, befriend",
						"frequency": "3"
					}
				}, {
					"pos": 3,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἦν",
					"entry": {
						"word": "ἦν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἀνθρώποισι·",
					"entry": {
						"word": "ἀνθρώποισι·",
						"meaning": "ἄνθρωπος, ὁ: human being",
						"frequency": "6"
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "ἦν: 3rd sg. impf. εἰμί"
				}
			}, {
				"id": 15,
				"book": 6,
				"number": 15,
				"text": [{
					"pos": 0,
					"text": "πάντας",
					"entry": {
						"word": "πάντας",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "γὰρ",
					"entry": {
						"word": "γὰρ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "φιλέεσκεν",
					"entry": {
						"word": "φιλέω",
						"meaning": "φιλέω: to love, befriend",
						"frequency": "3"
					}
				}, {
					"pos": 3,
					"text": "ὁδῷ",
					"entry": {
						"word": "ὁδῷ",
						"meaning": "ὁδός, ἡ: road, way, path, journey",
						"frequency": "3"
					}
				}, {
					"pos": 4,
					"text": "ἔπι",
					"entry": {
						"word": "ἔπι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "οἰκία",
					"entry": {
						"word": "οἰκία",
						"meaning": "οἰκία, τὰ: a house, home, dwelling",
						"frequency": "1"
					}
				}, {
					"pos": 6,
					"text": "ναίων.",
					"entry": {
						"word": "ναίω",
						"meaning": "ναίω: to inhabit, dwell, live, abide",
						"frequency": "5"
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "φιλέεσκεν: used to befriend, entertain; -σκ indicates iterative impf., see also line 19 ## ὁδῷ ἔπι: on the roadway; anastrophe"
				}
			}, {
				"id": 16,
				"book": 6,
				"number": 16,
				"text": [{
					"pos": 0,
					"text": "ἀλλά",
					"entry": {
						"word": "ἀλλά",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "οἱ",
					"entry": {
						"word": "οἱ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "οὔ",
					"entry": {
						"word": "οὔ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "τις",
					"entry": {
						"word": "τις",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "τῶν",
					"entry": {
						"word": "τῶν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "γε",
					"entry": {
						"word": "γε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "τότ᾽",
					"entry": {
						"word": "τότ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "ἤρκεσε",
					"entry": {
						"word": "ἤρκεσε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 8,
					"text": "λυγρὸν",
					"entry": {
						"word": "λυγρὸν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 9,
					"text": "ὄλεθρον",
					"entry": {
						"word": "ὄλεθρον",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "οἱ: him; dat. obj. of ὑπαντιάσας ## τις τῶν γε: any of those; see page 8, partitive gen., refers to πάντας"
				}
			}, {
				"id": 17,
				"book": 6,
				"number": 17,
				"text": [{
					"pos": 0,
					"text": "πρόσθεν",
					"entry": {
						"word": "πρόσθεν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "ὑπαντιάσας,",
					"entry": {
						"word": "ὑπαντιάσας,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἀλλ᾽",
					"entry": {
						"word": "ἀλλ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἄμφω",
					"entry": {
						"word": "ἄμφω",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "θυμὸν",
					"entry": {
						"word": "θυμὸν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἀπηύρα,",
					"entry": {
						"word": "ἀπηύρα,",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "ὑπαντιάσας: nom. sg. aor. pple ## ἄμφω θυμὸν: double acc. object ## ἀπηύρᾱ: ἀπ-ηύραε, 3rd sg. impf."
				}
			}, {
				"id": 18,
				"book": 6,
				"number": 18,
				"text": [{
					"pos": 0,
					"text": "αὐτὸν",
					"entry": {
						"word": "αὐτὸν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "θεράποντα",
					"entry": {
						"word": "θεράποντα",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "Καλήσιον,",
					"entry": {
						"word": "Καλήσιον,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ὅς",
					"entry": {
						"word": "ὅς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ῥα",
					"entry": {
						"word": "ῥα",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "τόθ᾽",
					"entry": {
						"word": "τόθ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "ἵππων",
					"entry": {
						"word": "ἵππων",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "αὐτὸν: him and…; in apposition to ἄμφω ## τόθ᾽: τότε, elision before aspirated vowel"
				}
			}, {
				"id": 19,
				"book": 6,
				"number": 19,
				"text": [{
					"pos": 0,
					"text": "ἔσκεν",
					"entry": {
						"word": "ἔσκεν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "ὑφηνίοχος·",
					"entry": {
						"word": "ὑφηνίοχος·",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "τὼ",
					"entry": {
						"word": "τὼ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἄμφω",
					"entry": {
						"word": "ἄμφω",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "γαῖαν",
					"entry": {
						"word": "γαῖαν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "ἐδύτην.",
					"entry": {
						"word": "ἐδύτην.",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "ἔσκεν: was; iterative impf. of εἰμί, cf. l. 15 ## τὼ: these; dual nom. pl., as ἄμφω; p. 3 ## ἐδύτην: went beneath; 3rd dual aor. δύω,‘entered,’ i.e. to the underworld, p. 24"
				}
			}, {
				"id": 20,
				"book": 6,
				"number": 20,
				"text": [{
					"pos": 0,
					"text": "Δρῆσον",
					"entry": {
						"word": "Δρῆσον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "Εὐρύαλος",
					"entry": {
						"word": "Εὐρύαλος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "Ὀφέλτιον",
					"entry": {
						"word": "Ὀφέλτιον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἐξενάριξε·",
					"entry": {
						"word": "ἐξενάριξε·",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 2,
					"remark": "βοὴν: in/at the battle cry; acc. of respect is common after an adj., here ἀγαθὸς ## ἔπεφνε: 3rd sg. aorist, θεινω"
				}
			}, {
				"id": 21,
				"book": 6,
				"number": 21,
				"text": [{
					"pos": 0,
					"text": "βῆ",
					"entry": {
						"word": "βῆ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δὲ",
					"entry": {
						"word": "δὲ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "μετ᾽",
					"entry": {
						"word": "μετ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "Αἴσηπον",
					"entry": {
						"word": "Αἴσηπον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "Πήδασον,",
					"entry": {
						"word": "Πήδασον,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "οὕς",
					"entry": {
						"word": "οὕς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "ποτε",
					"entry": {
						"word": "ποτε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 8,
					"text": "νύμφη",
					"entry": {
						"word": "νύμφη",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "βῆ: ἔβη, 3rd sg. aor. βαίνω, no augment ## μετ᾽: after…; μετὰ, i.e. in pursuit ## οὕς: acc. pl. relative pronoun"
				}
			}, {
				"id": 22,
				"book": 6,
				"number": 22,
				"text": [{
					"pos": 0,
					"text": "νηῒς",
					"entry": {
						"word": "νηῒς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "Ἀβαρβαρέη",
					"entry": {
						"word": "Ἀβαρβαρέη",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "τέκ᾽",
					"entry": {
						"word": "τέκ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἀμύμονι",
					"entry": {
						"word": "ἀμύμονι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "Βουκολίωνι.",
					"entry": {
						"word": "Βουκολίωνι.",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "τέκ᾽: τέκε, 3rd sg. aor. τίκτω, no augment ## βουκολίωνι: to…; dat. of interest"
				}
			}, {
				"id": 23,
				"book": 6,
				"number": 23,
				"text": [{
					"pos": 0,
					"text": "Βουκολίων",
					"entry": {
						"word": "Βουκολίων",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἦν",
					"entry": {
						"word": "ἦν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "υἱὸς",
					"entry": {
						"word": "υἱὸς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἀγαυοῦ",
					"entry": {
						"word": "ἀγαυοῦ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "Λαομέδοντος",
					"entry": {
						"word": "Λαομέδοντος",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": ""
				}
			}, {
				"id": 24,
				"book": 6,
				"number": 24,
				"text": [{
					"pos": 0,
					"text": "πρεσβύτατος",
					"entry": {
						"word": "πρεσβύτατος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "γενεῇ,",
					"entry": {
						"word": "γενεῇ,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "σκότιον",
					"entry": {
						"word": "σκότιον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "δέ",
					"entry": {
						"word": "δέ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἑ",
					"entry": {
						"word": "ἑ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "γείνατο",
					"entry": {
						"word": "γείνατο",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "μήτηρ·",
					"entry": {
						"word": "μήτηρ·",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "πρεσβύτατος: superlative ## γενεῇ: in…; dat. of respect, γενεή ## ἑ: him; 3rd sg. pronoun, acc. obj."
				}
			}, {
				"id": 25,
				"book": 6,
				"number": 25,
				"text": [{
					"pos": 0,
					"text": "ποιμαίνων",
					"entry": {
						"word": "ποιμαίνων",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἐπ᾽",
					"entry": {
						"word": "ἐπ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ὄεσσι",
					"entry": {
						"word": "ὄεσσι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "μίγη",
					"entry": {
						"word": "μίγη",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "φιλότητι",
					"entry": {
						"word": "φιλότητι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "εὐνῇ,",
					"entry": {
						"word": "εὐνῇ,",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "ἐπ᾽ὄεσσι: over the sheep; dat. pl. ## μίγη: he mingled; 3rd sg. aor. pass. dep. ## μίγνυμι, i.e. had sexual intercourse"
				}
			}, {
				"id": 26,
				"book": 6,
				"number": 26,
				"text": [{
					"pos": 0,
					"text": "ἣ",
					"entry": {
						"word": "ἣ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ὑποκυσαμένη",
					"entry": {
						"word": "ὑποκυσαμένη",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "διδυμάονε",
					"entry": {
						"word": "διδυμάονε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "γείνατο",
					"entry": {
						"word": "γείνατο",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "παῖδε.",
					"entry": {
						"word": "παῖδε.",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "ἥ δ᾽: and she…; “this one” ## διδυμάονε...παῖδε: dual acc., see below"
				}
			}, {
				"id": 27,
				"book": 6,
				"number": 27,
				"text": [{
					"pos": 0,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "μὲν",
					"entry": {
						"word": "μὲν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "τῶν",
					"entry": {
						"word": "τῶν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ὑπέλυσε",
					"entry": {
						"word": "ὑπέλυσε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "μένος",
					"entry": {
						"word": "μένος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "φαίδιμα",
					"entry": {
						"word": "φαίδιμα",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "γυῖα",
					"entry": {
						"word": "γυῖα",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "τῶν: of these; demonstrative, i.e. twins ## μένος...γυῖα: neuter acc."
				}
			}, {
				"id": 28,
				"book": 6,
				"number": 28,
				"text": [{
					"pos": 0,
					"text": "Μηκιστηϊάδης",
					"entry": {
						"word": "Μηκιστηϊάδης",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "καὶ",
					"entry": {
						"word": "καὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἀπ᾽",
					"entry": {
						"word": "ἀπ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ὤμων",
					"entry": {
						"word": "ὤμων",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "τεύχε᾽",
					"entry": {
						"word": "τεύχε᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἐσύλα.",
					"entry": {
						"word": "ἐσύλα.",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "τεύχε᾽: τεύχεα; acc. pl. τὀ τεῦχος"
				}
			}, {
				"id": 29,
				"book": 6,
				"number": 29,
				"text": [{
					"pos": 0,
					"text": "Ἀστύαλον",
					"entry": {
						"word": "Ἀστύαλον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἄρ᾽",
					"entry": {
						"word": "ἄρ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἔπεφνε",
					"entry": {
						"word": "ἔπεφνε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "μενεπτόλεμος",
					"entry": {
						"word": "μενεπτόλεμος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "Πολυποίτης·",
					"entry": {
						"word": "Πολυποίτης·",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": "ἔπεφνε: 3rd sg. aorist, θεινω"
				}
			}, {
				"id": 30,
				"book": 6,
				"number": 30,
				"text": [{
					"pos": 0,
					"text": "Πιδύτην",
					"entry": {
						"word": "Πιδύτην",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "Ὀδυσεὺς",
					"entry": {
						"word": "Ὀδυσεὺς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "Περκώσιον",
					"entry": {
						"word": "Περκώσιον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἐξενάριξεν",
					"entry": {
						"word": "ἐξενάριξεν",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 3,
					"remark": ""
				}
			}, {
				"id": 31,
				"book": 6,
				"number": 31,
				"text": [{
					"pos": 0,
					"text": "ἔγχεϊ",
					"entry": {
						"word": "ἔγχεϊ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "χαλκείῳ,",
					"entry": {
						"word": "χαλκείῳ,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "Τεῦκρος",
					"entry": {
						"word": "Τεῦκρος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "Ἀρετάονα",
					"entry": {
						"word": "Ἀρετάονα",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "δῖον.",
					"entry": {
						"word": "δῖον.",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "Τεῦκρος: add verb ἐξενάριξεν from l. 30"
				}
			}, {
				"id": 32,
				"book": 6,
				"number": 32,
				"text": [{
					"pos": 0,
					"text": "Ἀντίλοχος",
					"entry": {
						"word": "Ἀντίλοχος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "Ἄβληρον",
					"entry": {
						"word": "Ἄβληρον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἐνήρατο",
					"entry": {
						"word": "ἐνήρατο",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "δουρὶ",
					"entry": {
						"word": "δουρὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "φαεινῷ",
					"entry": {
						"word": "φαεινῷ",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "ἐνήρατο: aor. ἐναίρω"
				}
			}, {
				"id": 33,
				"book": 6,
				"number": 33,
				"text": [{
					"pos": 0,
					"text": "Νεστορίδης,",
					"entry": {
						"word": "Νεστορίδης,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "Ἔλατον",
					"entry": {
						"word": "Ἔλατον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "δὲ",
					"entry": {
						"word": "δὲ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἄναξ",
					"entry": {
						"word": "ἄναξ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἀνδρῶν",
					"entry": {
						"word": "ἀνδρῶν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "Ἀγαμέμνων·",
					"entry": {
						"word": "Ἀγαμέμνων·",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "Ἀγαμέμνων: ellipsis, add ἐνήρατο, l. 32"
				}
			}, {
				"id": 34,
				"book": 6,
				"number": 34,
				"text": [{
					"pos": 0,
					"text": "ναῖε",
					"entry": {
						"word": "ναῖε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δὲ",
					"entry": {
						"word": "δὲ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "Σατνιόεντος",
					"entry": {
						"word": "Σατνιόεντος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἐϋρρείταο",
					"entry": {
						"word": "ἐϋρρείταο",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "παρ᾽",
					"entry": {
						"word": "παρ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ὄχθας",
					"entry": {
						"word": "ὄχθας",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "ναῖε: impf., Elatus is subject; δέ suggests a change of subject from the previous line ## ἐϋρρείταο: gen. sg."
				}
			}, {
				"id": 35,
				"book": 6,
				"number": 35,
				"text": [{
					"pos": 0,
					"text": "Πήδασον",
					"entry": {
						"word": "Πήδασον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "αἰπεινήν.",
					"entry": {
						"word": "αἰπεινήν.",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "Φύλακον",
					"entry": {
						"word": "Φύλακον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἕλε",
					"entry": {
						"word": "ἕλε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "Λήϊτος",
					"entry": {
						"word": "Λήϊτος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "ἥρως",
					"entry": {
						"word": "ἥρως",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "ἕλε: 3rd sg. aor. αἱρέω"
				}
			}, {
				"id": 36,
				"book": 6,
				"number": 36,
				"text": [{
					"pos": 0,
					"text": "φεύγοντ᾽·",
					"entry": {
						"word": "φεύγοντ᾽·",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "Εὐρύπυλος",
					"entry": {
						"word": "Εὐρύπυλος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "δὲ",
					"entry": {
						"word": "δὲ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "Μελάνθιον",
					"entry": {
						"word": "Μελάνθιον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἐξενάριξεν.",
					"entry": {
						"word": "ἐξενάριξεν.",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": ""
				}
			}, {
				"id": 37,
				"book": 6,
				"number": 37,
				"text": [{
					"pos": 0,
					"text": "Ἄδρηστον",
					"entry": {
						"word": "Ἄδρηστον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἄρ᾽",
					"entry": {
						"word": "ἄρ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἔπειτα",
					"entry": {
						"word": "ἔπειτα",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "βοὴν",
					"entry": {
						"word": "βοὴν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἀγαθὸς",
					"entry": {
						"word": "ἀγαθὸς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "Μενέλαος",
					"entry": {
						"word": "Μενέλαος",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "βοὴν: in/at the battle cry; acc. of respect again with ἀγαθὸς, see 6.12"
				}
			}, {
				"id": 38,
				"book": 6,
				"number": 38,
				"text": [{
					"pos": 0,
					"text": "ζωὸν",
					"entry": {
						"word": "ζωὸν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "ἕλ᾽·",
					"entry": {
						"word": "ἕλ᾽·",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἵππω",
					"entry": {
						"word": "ἵππω",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "γάρ",
					"entry": {
						"word": "γάρ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "οἱ",
					"entry": {
						"word": "οἱ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἀτυζομένω",
					"entry": {
						"word": "ἀτυζομένω",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "πεδίοιο",
					"entry": {
						"word": "πεδίοιο",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "ἕλ᾽: ἕλε, see l. 35 above ## ἵππω, ἀτυζομένω, βλαφθέντε: dual nom. ## οἱ: his; ‘to him,’ dat. of possession πεδίοιο: within the plain; gen. of place within (type of partitive), see also 6.507"
				}
			}, {
				"id": 39,
				"book": 6,
				"number": 39,
				"text": [{
					"pos": 0,
					"text": "ὄζῳ",
					"entry": {
						"word": "ὄζῳ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "ἔνι",
					"entry": {
						"word": "ἔνι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "βλαφθέντε",
					"entry": {
						"word": "βλαφθέντε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "μυρικίνῳ",
					"entry": {
						"word": "μυρικίνῳ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἀγκύλον",
					"entry": {
						"word": "ἀγκύλον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἅρμα",
					"entry": {
						"word": "ἅρμα",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "ὄζῳ ἔνι…μυρικίνῳ: preposition ἐν ## βλαφθέντε: hindered; dual aor. pass. pple"
				}
			}, {
				"id": 40,
				"book": 6,
				"number": 40,
				"text": [{
					"pos": 0,
					"text": "ἄξαντ᾽",
					"entry": {
						"word": "ἄξαντ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "ἐν",
					"entry": {
						"word": "ἐν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "πρώτῳ",
					"entry": {
						"word": "πρώτῳ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ῥυμῷ",
					"entry": {
						"word": "ῥυμῷ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "αὐτὼ",
					"entry": {
						"word": "αὐτὼ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "μὲν",
					"entry": {
						"word": "μὲν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "ἐβήτην",
					"entry": {
						"word": "ἐβήτην",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 4,
					"remark": "ἄξαντε: dual aor. act. pple ἄγνυμι ## ἐν πρώτῳ ῥυμῷ: on the front of the pole, i.e. where the pole drawing the chariot attaches to the harness of the horses ## αὐτὼ μὲν: they on the one hand; dual aor. act. pple ἵππω, μὲν anticipates a contrast with αὐτὸς δὲ in 6.42 ## ἐβήτην: 3rd dual aor. βαίνω; see p. 24"
				}
			}, {
				"id": 41,
				"book": 6,
				"number": 41,
				"text": [{
					"pos": 0,
					"text": "πρὸς",
					"entry": {
						"word": "πρὸς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "πόλιν,",
					"entry": {
						"word": "πόλιν,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ᾗ",
					"entry": {
						"word": "ᾗ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "περ",
					"entry": {
						"word": "περ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "οἱ",
					"entry": {
						"word": "οἱ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἄλλοι",
					"entry": {
						"word": "ἄλλοι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "ἀτυζόμενοι",
					"entry": {
						"word": "ἀτυζόμενοι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "φοβέοντο,",
					"entry": {
						"word": "φοβέοντο,",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "ᾗ περ: in which very place; place where"
				}
			}, {
				"id": 42,
				"book": 6,
				"number": 42,
				"text": [{
					"pos": 0,
					"text": "αὐτὸς",
					"entry": {
						"word": "αὐτὸς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἐκ",
					"entry": {
						"word": "ἐκ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "δίφροιο",
					"entry": {
						"word": "δίφροιο",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "παρὰ",
					"entry": {
						"word": "παρὰ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "τροχὸν",
					"entry": {
						"word": "τροχὸν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "ἐξεκυλίσθη",
					"entry": {
						"word": "ἐξεκυλίσθη",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "αὐτὸς δ: but he himself; see note l. 40 ## ἐξεκυλίσθη: 3rd sg. aor. pass. ἐκ-κυλίνδω"
				}
			}, {
				"id": 43,
				"book": 6,
				"number": 43,
				"text": [{
					"pos": 0,
					"text": "πρηνὴς",
					"entry": {
						"word": "πρηνὴς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "ἐν",
					"entry": {
						"word": "ἐν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "κονίῃσιν",
					"entry": {
						"word": "κονίῃσιν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἐπὶ",
					"entry": {
						"word": "ἐπὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "στόμα·",
					"entry": {
						"word": "στόμα·",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "πὰρ",
					"entry": {
						"word": "πὰρ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "δέ",
					"entry": {
						"word": "δέ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "οἱ",
					"entry": {
						"word": "οἱ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 8,
					"text": "ἔστη",
					"entry": {
						"word": "ἔστη",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "ἐπὶ: onto…; acc. place to which ## πὰρ…οἱ: beside him: παρά + dat., sg. or an example of tmesis (‘cutting’ of the compound παρέστη into two words) and οἱ is the obj. of a compound verb ## ἔστη: 3rd sg. aor. ἵστημι"
				}
			}, {
				"id": 44,
				"book": 6,
				"number": 44,
				"text": [{
					"pos": 0,
					"text": "Ἀτρεΐδης",
					"entry": {
						"word": "Ἀτρεΐδης",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "Μενέλαος,",
					"entry": {
						"word": "Μενέλαος,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἔχων",
					"entry": {
						"word": "ἔχων",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "δολιχόσκιον",
					"entry": {
						"word": "δολιχόσκιον",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "ἔγχος.",
					"entry": {
						"word": "ἔγχος.",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "ἔχων: nom. sg. pres. pple ἔχω"
				}
			}, {
				"id": 45,
				"book": 6,
				"number": 45,
				"text": [{
					"pos": 0,
					"text": "Ἄδρηστος",
					"entry": {
						"word": "Ἄδρηστος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἄρ᾽",
					"entry": {
						"word": "ἄρ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἔπειτα",
					"entry": {
						"word": "ἔπειτα",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "λαβὼν",
					"entry": {
						"word": "λαβὼν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἐλίσσετο",
					"entry": {
						"word": "ἐλίσσετο",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "γούνων·",
					"entry": {
						"word": "γούνων·",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "λαβῶν: nom. sg. aor. pple λαμβάνω ## ἐλίσσετο: began to…; inchoative impf. ## γοὺνων: by…; partitive gen. with λαβῶν"
				}
			}, {
				"id": 46,
				"book": 6,
				"number": 46,
				"text": [{
					"pos": 0,
					"text": "‘ζώγρει,",
					"entry": {
						"word": "‘ζώγρει,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "Ἀτρέος",
					"entry": {
						"word": "Ἀτρέος",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "υἱέ,",
					"entry": {
						"word": "υἱέ,",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "σὺ",
					"entry": {
						"word": "σὺ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἄξια",
					"entry": {
						"word": "ἄξια",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "δέξαι",
					"entry": {
						"word": "δέξαι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "ἄποινα·",
					"entry": {
						"word": "ἄποινα·",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "ζὼγρει: ζὼγρε-ε, note the accent: not 3rd sg. but sg. imperative ## υἱέ: vocative direct address ὑιός ## δέξαι: δέκσαι, aor. mid. imper. δέχομαι"
				}
			}, {
				"id": 47,
				"book": 6,
				"number": 47,
				"text": [{
					"pos": 0,
					"text": "πολλὰ",
					"entry": {
						"word": "πολλὰ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "δ᾽",
					"entry": {
						"word": "δ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἐν",
					"entry": {
						"word": "ἐν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ἀφνειοῦ",
					"entry": {
						"word": "ἀφνειοῦ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "πατρὸς",
					"entry": {
						"word": "πατρὸς",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "κειμήλια",
					"entry": {
						"word": "κειμήλια",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "κεῖται,",
					"entry": {
						"word": "κεῖται,",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "ἐν…πατρὸς: in… father’s (house) ## κεῖται: 3rd sg. with neut. pl. subject"
				}
			}, {
				"id": 48,
				"book": 6,
				"number": 48,
				"text": [{
					"pos": 0,
					"text": "χαλκός",
					"entry": {
						"word": "χαλκός",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "τε",
					"entry": {
						"word": "τε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "χρυσός",
					"entry": {
						"word": "χρυσός",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "τε",
					"entry": {
						"word": "τε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "πολύκμητός",
					"entry": {
						"word": "πολύκμητός",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "τε",
					"entry": {
						"word": "τε",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "σίδηρος,",
					"entry": {
						"word": "σίδηρος,",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "ἕλ᾽: ἕλε, see l. 35 above ## ἵππω, ἀτυζομένω, βλαφθέντε: dual nom. ## οἱ: his; ‘to him,’ dat. of possession πεδίοιο: within the plain; gen. of place within (type of partitive), see also 6.507"
				}
			}, {
				"id": 49,
				"book": 6,
				"number": 49,
				"text": [{
					"pos": 0,
					"text": "τῶν",
					"entry": {
						"word": "τῶν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "κέν",
					"entry": {
						"word": "κέν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "τοι",
					"entry": {
						"word": "τοι",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "χαρίσαιτο",
					"entry": {
						"word": "χαρίσαιτο",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "πατὴρ",
					"entry": {
						"word": "πατὴρ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἀπερείσι᾽",
					"entry": {
						"word": "ἀπερείσι᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "ἄποινα",
					"entry": {
						"word": "ἄποινα",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "τῶν: of which (wealth); partitive gen. or possibly gen. of source ‘from which’ ## τοι: to you; dat. sg. alternative to σοι, τοι also frequently functions as a particle which means ‘to be sure,’ or ‘you know’ ## κὲν χαρίσαιτο… εἴ…πεπύθοιτο: he would grant…if he should learn; futureless-vivid condition (εἰ + opt., κέ/ἄν + opt), here with aor. optatives, χαρίζομαι, πυνθάνομαι; the κεν in the protasis εἰ κεν in line 48 is unnecessary and perhaps a repetition of κέν in the apodosis in line 49"
				}
			}, {
				"id": 50,
				"book": 6,
				"number": 50,
				"text": [{
					"pos": 0,
					"text": "εἴ",
					"entry": {
						"word": "εἴ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 1,
					"text": "κεν",
					"entry": {
						"word": "κεν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 2,
					"text": "ἐμὲ",
					"entry": {
						"word": "ἐμὲ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 3,
					"text": "ζωὸν",
					"entry": {
						"word": "ζωὸν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 4,
					"text": "πεπύθοιτ᾽",
					"entry": {
						"word": "πεπύθοιτ᾽",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 5,
					"text": "ἐπὶ",
					"entry": {
						"word": "ἐπὶ",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 6,
					"text": "νηυσὶν",
					"entry": {
						"word": "νηυσὶν",
						"meaning": "",
						"frequency": ""
					}
				}, {
					"pos": 7,
					"text": "Ἀχαιῶν.᾽",
					"entry": {
						"word": "Ἀχαιῶν.᾽",
						"meaning": "",
						"frequency": ""
					}
				}],
				"steadman": {
					"page": 5,
					"remark": "ἐπὶ νηυσὶν: near the ships…; dat. pl."
				}
			}]
		}
			
  });
