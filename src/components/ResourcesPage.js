import React, {useState} from 'react';
import './ResourcesPage.css';

function ResourcesPage() {
    const [showSteels, setShowSteels] = useState(false);
    const [showLowBeg, setLowBeg] = useState(false);
    const [showUpBeg, setUpBeg] = useState(false);
    const [showProficient, setProficient] = useState(false);
    const [showAdvanced, setAdvanced] = useState(false);
    const [showPlatforms, setShowPlatforms] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showTechRecommendations, setShowTechRecommendations] = useState(false);

    // Toggle functions for each section
    //const toggleSteels = () => setShowSteels(!showSteels);
    const toggleLowBeg = () => setLowBeg(!showLowBeg);
    const toggleUpBeg = () => setUpBeg(!showUpBeg);
    const toggleProficient = () => setProficient(!showProficient);
    const toggleAdvanced = () => setAdvanced(!showAdvanced);
    const togglePlatforms = () => setShowPlatforms(!showPlatforms);
    const toggleProjects = () => setShowProjects(!showProjects);
    const toggleTechRecommendations = () => setShowTechRecommendations(!showTechRecommendations);

    const closeAllLevels = () => {
        setLowBeg(false);
        setUpBeg(false);
        setProficient(false);
        setAdvanced(false);
    };

    const toggleSteels = () => {
        setShowSteels(!showSteels);
        if (showSteels) {
            closeAllLevels(); // Close all levels when collapsing STEELS
        }
    };

    return (
        <div class="resources">
            <div className="button-container">
            <button onClick={toggleSteels} className="toggle-button">
                <h2>STEELS Standards</h2>
            </button>
            {showSteels && (
                <div className="levels-container">
                    <div className="download-text">
                    <p>Click on a STEELS standard to download it!</p>
                    </div>
                <div className="box">
                    <h3>Lower Beginner</h3>
                    <a href="https://files5.pdesas.org/117181208234027170154255183096157115097174210144/Download.ashx?hash=2.2">3.5.K-2.A</a><br />
                    <a href="https://files5.pdesas.org/237198230215126081060166106182139140088219007107/Download.ashx?hash=2.2">3.5.K-2.B</a><br />
                    <a href="https://files5.pdesas.org/254124005099200220163213163018147126087211127208/Download.ashx?hash=2.2">3.5.K-2.C</a><br />
                    {showLowBeg && ( 
                    <>
                    <a href="https://files5.pdesas.org/169080103040029253161014097207126207083002141099/Download.ashx?hash=2.2">3.5.K-2.D</a><br />
                    <a href="https://files5.pdesas.org/161230240169255061023094135120081164110030051105/Download.ashx?hash=2.2">3.5.K-2.E</a><br />
                    <a href="https://files5.pdesas.org/154120155141037254059038146041015125157056090032/Download.ashx?hash=2.2">3.5.K-2.F</a><br />
                    <a href="https://files5.pdesas.org/101140225183109098004244038025008133143001051104/Download.ashx?hash=2.2">3.5.K-2.G</a><br />
                    <a href="https://files5.pdesas.org/142022029189114148148253245079138198031126104177/Download.ashx?hash=2.2">3.5.K-2.H</a><br />
                    <a href="https://files5.pdesas.org/179198200079177079233127126106153148049124073136/Download.ashx?hash=2.2">3.5.K-2.I</a><br />
                    <a href="https://files5.pdesas.org/250039234198083006219074047031016048090213198254/Download.ashx?hash=2.2">3.5.K-2.J</a><br />
                    <a href="https://files5.pdesas.org/039154174164029063194014046082222244158110225142/Download.ashx?hash=2.2">3.5.K-2.K</a><br />
                    <a href="https://files5.pdesas.org/096208161178030063054194170186253065089254243220/Download.ashx?hash=2.2  ">3.5.K-2.L</a><br />
                    <a href="https://files5.pdesas.org/141073079053144248148057232011143131034150087124/Download.ashx?hash=2.2">3.5.K-2.M</a><br />
                    <a href="https://files5.pdesas.org/080093088190093139139061040219160094219075040155/Download.ashx?hash=2.2">3.5.K-2.N</a><br />
                    <a href="https://files5.pdesas.org/207188128182216098135223010234062053089224157192/Download.ashx?hash=2.2">3.5.K-2.O</a><br />
                    <a href="https://files5.pdesas.org/195114044058251085194134103156149083074188211134/Download.ashx?hash=2.2">3.5.K-2.P</a><br />
                    <a href="https://files5.pdesas.org/230198236125025041020219120027246004043065138073/Download.ashx?hash=2.2">3.5.K-2.Q</a><br />
                    <a href="https://files5.pdesas.org/024239149058136158074056039028131011080040174102/Download.ashx?hash=2.2">3.5.K-2.R</a><br />
                    <a href="https://files5.pdesas.org/152063251096087095083175130123152206203033242246/Download.ashx?hash=2.2">3.5.K-2.S</a><br />
                    <a href="https://files5.pdesas.org/113138152203182022087183133026002037229218156066/Download.ashx?hash=2.2">3.5.K-2.T</a><br />
                    <a href="https://files5.pdesas.org/008228223242225148199109001031172155125180147244/Download.ashx?hash=2.2">3.5.K-2.U</a><br />
                    <a href="https://files5.pdesas.org/060062204042181157173161060221247229079039096097/Download.ashx?hash=2.2">3.5.K-2.V</a><br />
                    <a href="https://files5.pdesas.org/122090064248125133153144078173220200185208110223/Download.ashx?hash=2.2">3.5.K-2.W</a><br />
                    <a href="https://files5.pdesas.org/034176159050101146218043064179252091131180164175/Download.ashx?hash=2.2">3.5.K-2.X</a><br />
                    <a href="https://files5.pdesas.org/195080194149063071061253156073138196153017112045/Download.ashx?hash=2.2">3.5.K-2.Y</a><br />
                    <a href="https://files5.pdesas.org/193143136129247060135064173099060067147078249039/Download.ashx?hash=2.2">3.5.K-2.Z</a><br />
                    <a href="https://files5.pdesas.org/186083087123057080015141177125209246109001056035/Download.ashx?hash=2.2">3.5.K-2.AA</a><br />
                    <a href="https://files5.pdesas.org/054134017255078026107242192105194132191014144116/Download.ashx?hash=2.2">3.5.K-2.BB</a><br />
                    <a href="https://files5.pdesas.org/212103033137111081203018211043018126090111198128/Download.ashx?hash=2.2">3.5.K-2.CC</a><br />
                    <a href="https://files5.pdesas.org/120013050040189120039035103019186249131050125077/Download.ashx?hash=2.2">3.5.K-2.DD</a><br />
                    </>)}
                    <button onClick={toggleLowBeg} className="show-all-button">
                        {showLowBeg ? "Show Less" : "Show All"}
                    </button>
                </div>
                
                <div className="box">
                    <h3>Upper Beginner</h3>
                    <a href="https://files5.pdesas.org/192123200213051253114190099114138033029024251068/Download.ashx?hash=2.2">3.5.3-5.A</a><br />
                    <a href="https://files5.pdesas.org/080033089127183102084155242179142161102043032204/Download.ashx?hash=2.2">3.5.3-5.B</a><br />
                    <a href="https://files5.pdesas.org/227124228014115124108137204158214222242220044074/Download.ashx?hash=2.2">3.5.3-5.C</a><br />
                    {showUpBeg && ( 
                    <>
                    <a href="https://files5.pdesas.org/005217049026216210108020201117108201070032115033/Download.ashx?hash=2.2">3.5.3-5.D</a><br />
                    <a href="https://files5.pdesas.org/124154094171226144221054011105155180028216014181/Download.ashx?hash=2.2">3.5.3-5.E</a><br />
                    <a href="https://files5.pdesas.org/253227175075069096135218040098217086121148208094/Download.ashx?hash=2.2">3.5.3-5.F</a><br />
                    <a href="https://files5.pdesas.org/051103211028132122000074005088106089229066070064/Download.ashx?hash=2.2">3.5.3-5.G</a><br />
                    <a href="https://files5.pdesas.org/007165206141029158131044070195218228107103006162/Download.ashx?hash=2.2">3.5.3-5.H</a><br />
                    <a href="https://files5.pdesas.org/051145012132196231232188077171108166007104114116/Download.ashx?hash=2.2">3.5.3-5.I</a><br />
                    <a href="https://files5.pdesas.org/104174049016108239212115138042166163156205147103/Download.ashx?hash=2.2">3.5.3-5.J</a><br />
                    <a href="https://files5.pdesas.org/066086170166120206013032214252133041115019115162/Download.ashx?hash=2.2">3.5.3-5.K</a><br />
                    <a href="https://files5.pdesas.org/128007125238116252035090106027181151236122195210/Download.ashx?hash=2.2">3.5.3-5.L</a><br />
                    <a href="https://files5.pdesas.org/196175010115206168002034085206218103233219019168/Download.ashx?hash=2.2">3.5.3-5.M</a><br />
                    <a href="https://files5.pdesas.org/042233206115253238095243086124186212116043139250/Download.ashx?hash=2.2">3.5.3-5.N</a><br />
                    <a href="https://files5.pdesas.org/010203020166157061092108171118138243233184135245/Download.ashx?hash=2.2">3.5.3-5.O</a><br />
                    <a href="https://files5.pdesas.org/147198227181136018186018239064099228118242190140/Download.ashx?hash=2.2">3.5.3-5.P</a><br />
                    <a href="https://files5.pdesas.org/109239190205146160194065084195021063015028097224/Download.ashx?hash=2.2">3.5.3-5.Q</a><br />
                    <a href="https://files5.pdesas.org/254194189011033168164202082057233025040177095206/Download.ashx?hash=2.2">3.5.3-5.R</a><br />
                    <a href="https://files5.pdesas.org/001098247157160099053238163157093015241155117183/Download.ashx?hash=2.2">3.5.3-5.S</a><br />
                    <a href="https://files5.pdesas.org/212176202194087240028112124113244112245087043021/Download.ashx?hash=2.2">3.5.3-5.T</a><br />
                    <a href="https://files5.pdesas.org/223053018137197180139113254153057001013076249190/Download.ashx?hash=2.2">3.5.3-5.U</a><br />
                    <a href="https://files5.pdesas.org/084252134187181181245062070207068236251126093081/Download.ashx?hash=2.2">3.5.3-5.V</a><br />
                    <a href="https://files5.pdesas.org/222078048087154118212142238011129222143134134208/Download.ashx?hash=2.2">3.5.3-5.W</a><br />
                    <a href="https://files5.pdesas.org/248251144120126218120248163075072205128190226035/Download.ashx?hash=2.2">3.5.3-5.X</a><br />
                    <a href="https://files5.pdesas.org/195252220132139167239148087113031007248192214134/Download.ashx?hash=2.2">3.5.3-5.Y</a><br />
                    <a href="https://files5.pdesas.org/040217013239210014246037224016145206249081247065/Download.ashx?hash=2.2">3.5.3-5.Z</a><br />
                    <a href="https://files5.pdesas.org/085168093246121137108251183059020104069177101250/Download.ashx?hash=2.2">3.5.3-5.AA</a><br />
                    <a href="https://files5.pdesas.org/210010019171161094253109239019228086169229052040/Download.ashx?hash=2.2">3.5.3-5.BB</a><br />
                    <a href="https://files5.pdesas.org/021049225106185166172192097131138160241200098218/Download.ashx?hash=2.2">3.5.3-5.CC</a><br />
                    <a href="https://files5.pdesas.org/036239217189151241042242014207133009228088025251/Download.ashx?hash=2.2">3.5.3-5.DD</a><br />
                    <a href="https://files5.pdesas.org/182027150149060240163231214166075160188136013080/Download.ashx?hash=2.2">3.5.3-5.EE</a><br />
                    <a href="https://files5.pdesas.org/238011211062058118139224042235192097016038147129/Download.ashx?hash=2.2">3.5.3-5.FF</a><br />
                    <a href="https://files5.pdesas.org/069021061250215126097141193074039086127208093053/Download.ashx?hash=2.2">3.5.3-5.GG</a><br />
                    <a href="https://files5.pdesas.org/233165143004208231102043183111067160012240136060/Download.ashx?hash=2.2">3.5.3-5.HH</a><br />
                    </>)}
                    <button onClick={toggleUpBeg} className="show-all-button">
                        {showUpBeg ? "Show Less" : "Show All"}
                    </button>
                </div>
                <div className="box">
                    <h3>Proficient</h3>
                    <a href="https://files5.pdesas.org/002090051034201229117219190199235164188238024034/Download.ashx?hash=2.2">3.5.6-8.A</a><br />
                    <a href="https://files5.pdesas.org/244214132125186219033198116042173016204114033174/Download.ashx?hash=2.2">3.5.6-8.B</a><br />
                    <a href="https://files5.pdesas.org/006008023101053170117031108070123074097113109072/Download.ashx?hash=2.2">3.5.6-8.C</a><br />
                    {showProficient && ( 
                    <>
                    <a href="https://files5.pdesas.org/037227059013089157130186151183253243227136190167/Download.ashx?hash=2.2">3.5.6-8.D</a><br />
                    <a href="https://files5.pdesas.org/254078244078110121079251115164023230092100016195/Download.ashx?hash=2.2">3.5.6-8.E</a><br />
                    <a href="https://files5.pdesas.org/050205197024147196040149181007017248032244235080/Download.ashx?hash=2.2">3.5.6-8.F</a><br />
                    <a href="https://files5.pdesas.org/250014226114139172173254247149098013233116174016/Download.ashx?hash=2.2">3.5.6-8.G</a><br />
                    <a href="https://files5.pdesas.org/163005038051165169006245176208132131190217116096/Download.ashx?hash=2.2">3.5.6-8.H</a><br />
                    <a href="https://files5.pdesas.org/108112041116232255207228146204090032226252193124/Download.ashx?hash=2.2">3.5.6-8.I</a><br />
                    <a href="https://files5.pdesas.org/054180003004065183020120057163008104155248217235/Download.ashx?hash=2.2">3.5.6-8.J</a><br />
                    <a href="https://files5.pdesas.org/055216065045142101091198140253174218018106005019/Download.ashx?hash=2.2">3.5.6-8.K</a><br />
                    <a href="https://files5.pdesas.org/147007083165240132052156110134092081061024064016/Download.ashx?hash=2.2">3.5.6-8.L</a><br />
                    <a href="https://files5.pdesas.org/177208096231121112061065043070011224112245220020/Download.ashx?hash=2.2">3.5.6-8.M</a><br />
                    <a href="https://files5.pdesas.org/168187066151024048116205196005223142111099005219/Download.ashx?hash=2.2">3.5.6-8.N</a><br />
                    <a href="https://files5.pdesas.org/003238120220204089254017007080175097174255132133/Download.ashx?hash=2.2">3.5.6-8.O</a><br />
                    <a href="https://files5.pdesas.org/104225195229097234252036052078158115232233084229/Download.ashx?hash=2.2">3.5.6-8.P</a><br />
                    <a href="https://files5.pdesas.org/010055042080117107037076135031230155085176210204/Download.ashx?hash=2.2">3.5.6-8.Q</a><br />
                    <a href="https://files5.pdesas.org/229079150204105025161123107037175048090140045093/Download.ashx?hash=2.2">3.5.6-8.R</a><br />
                    <a href="https://files5.pdesas.org/169090007038056100217210124003150051027020137024/Download.ashx?hash=2.2">3.5.6-8.S</a><br />
                    <a href="https://files5.pdesas.org/141226021166097059033041122098250156067086251078/Download.ashx?hash=2.2">3.5.6-8.T</a><br />
                    <a href="https://files5.pdesas.org/225125079146198173223229244205143071127114037068/Download.ashx?hash=2.2">3.5.6-8.U</a><br />
                    <a href="https://files5.pdesas.org/011052090081143130065135076036209199015185251214/Download.ashx?hash=2.2">3.5.6-8.V</a><br />
                    <a href="https://files5.pdesas.org/248138237162144175107000090126125000011164054045/Download.ashx?hash=2.2">3.5.6-8.W</a><br />
                    <a href="https://files5.pdesas.org/191077107162061033191092180254094011093001251131/Download.ashx?hash=2.2">3.5.6-8.X</a><br />
                    <a href="https://files5.pdesas.org/143094018229126164071036061251013233139026127178/Download.ashx?hash=2.2">3.5.6-8.Y</a><br />
                    <a href="https://files5.pdesas.org/250227253081094174158106133032253203029161074103/Download.ashx?hash=2.2">3.5.6-8.Z</a><br />
                    <a href="https://files5.pdesas.org/019172020242187031073166154060018088195219119221/Download.ashx?hash=2.2">3.5.6-8.AA</a><br />
                    <a href="https://files5.pdesas.org/235036232045134075125059046142179129042095134123/Download.ashx?hash=2.2">3.5.6-8.BB</a><br />
                    <a href="https://files5.pdesas.org/202207034238051062213202015009077219061167227169/Download.ashx?hash=2.2">3.5.6-8.CC</a><br />
                    <a href="https://files5.pdesas.org/207100067210019241029156090124042160204127021213/Download.ashx?hash=2.2">3.5.6-8.DD</a><br />
                    <a href="https://files5.pdesas.org/101203203242197017109096133004207133057127052228/Download.ashx?hash=2.2">3.5.6-8.EE</a><br />
                    <a href="https://files5.pdesas.org/205086157163122055061238018242191005094232065019/Download.ashx?hash=2.2">3.5.6-8.FF</a><br />
                    <a href="https://files5.pdesas.org/067057030146123187047085208090089082001012155008/Download.ashx?hash=2.2">3.5.6-8.GG</a><br />
                    <a href="https://files5.pdesas.org/045225123022235241112123166034241118193020004055/Download.ashx?hash=2.2">3.5.6-8.HH</a><br />
                    <a href="https://files5.pdesas.org/133023094051002086248125216116249163183110135039/Download.ashx?hash=2.2">3.5.6-8.II</a><br />
                    <a href="https://files5.pdesas.org/164216219116102219064033106096129149122247219042/Download.ashx?hash=2.2">3.5.6-8.JJ</a><br />
                    <a href="https://files5.pdesas.org/031176110099065030206242252068251045122192108014/Download.ashx?hash=2.2">3.5.6-8.KK</a><br />
                    <a href="https://files5.pdesas.org/050156046234044222190009142015192137030139180004/Download.ashx?hash=2.2">3.5.6-8.LL</a><br />
                    </>)}
                    <button onClick={toggleProficient} className="show-all-button">
                        {showProficient ? "Show Less" : "Show All"}
                    </button>
                </div>
                <div className="box">
                    <h3>Advanced</h3>
                    <a href="https://files5.pdesas.org/162044083152017021026239152101217105009088179002/Download.ashx?hash=2.2">3.5.9-12.A</a><br />
                    <a href="https://files5.pdesas.org/162182216218005227239103014162202179188173158137/Download.ashx?hash=2.2">3.5.9-12.B</a><br />
                    <a href="https://files5.pdesas.org/215245078057186073251063009173014100075046063174/Download.ashx?hash=2.2">3.5.9-12.C</a><br />
                    {showAdvanced && ( 
                    <>
                    <a href="https://files5.pdesas.org/090121114181159062147150255156099252193174248184/Download.ashx?hash=2.2">3.5.9-12.D</a><br />
                    <a href="https://files5.pdesas.org/215202132108178027027000030255142164072248083221/Download.ashx?hash=2.2">3.5.9-12.E</a><br />
                    <a href="https://files5.pdesas.org/204135184189177114224098078144114178189161031046/Download.ashx?hash=2.2">3.5.9-12.F</a><br />
                    <a href="https://files5.pdesas.org/201055193119204028031029060053137029082195086014/Download.ashx?hash=2.2">3.5.9-12.G</a><br />
                    <a href="https://files5.pdesas.org/119007057149252237076176169130205192136130239085/Download.ashx?hash=2.2">3.5.9-12.H</a><br />
                    <a href="https://files5.pdesas.org/094061092159124115138227125149027018089068158140/Download.ashx?hash=2.2">3.5.9-12.I</a><br />
                    <a href="https://files5.pdesas.org/210068028204179255183193205226156047092243105180/Download.ashx?hash=2.2">3.5.9-12.J</a><br />
                    <a href="https://files5.pdesas.org/005150023145245061019042144011153109003121142132/Download.ashx?hash=2.2">3.5.9-12.K</a><br />
                    <a href="https://files5.pdesas.org/098231255067244035098122215097002091101072180026/Download.ashx?hash=2.2">3.5.9-12.L</a><br />
                    <a href="https://files5.pdesas.org/241195147121252131057001193183197205180241162205/Download.ashx?hash=2.2">3.5.9-12.M</a><br />
                    <a href="https://files5.pdesas.org/161203195084170179233068016174194158009105195187/Download.ashx?hash=2.2">3.5.9-12.N</a><br />
                    <a href="https://files5.pdesas.org/080160070109007092228184120091208055152162165239/Download.ashx?hash=2.2">3.5.9-12.O</a><br />
                    <a href="https://files5.pdesas.org/133028192161040124000026223038023050097131199014/Download.ashx?hash=2.2">3.5.9-12.P</a><br />
                    <a href="https://files5.pdesas.org/016138081223065117078046198102044010228081064063/Download.ashx?hash=2.2">3.5.9-12.Q</a><br />
                    <a href="https://files5.pdesas.org/182050228019202181202028134105153039197146027174/Download.ashx?hash=2.2">3.5.9-12.R</a><br />
                    <a href="https://files5.pdesas.org/149240123006235058055134128175071188090024179069/Download.ashx?hash=2.2">3.5.9-12.S</a><br />
                    <a href="https://files5.pdesas.org/250150144047213000198151211009198109178033246152/Download.ashx?hash=2.2">3.5.9-12.T</a><br />
                    <a href="https://files5.pdesas.org/077243227002061056253089236238029152122022131221/Download.ashx?hash=2.2">3.5.9-12.U</a><br />
                    <a href="https://files5.pdesas.org/050017119020070226081186195172198200019091004178/Download.ashx?hash=2.2">3.5.9-12.V</a><br />
                    <a href="https://files5.pdesas.org/179067082009108049148217181051188012065172029221/Download.ashx?hash=2.2">3.5.9-12.W</a><br />
                    <a href="https://files5.pdesas.org/173248064000144096156195069032087236233081087100/Download.ashx?hash=2.2">3.5.9-12.X</a><br />
                    <a href="https://files5.pdesas.org/134147102066229055118073177036158068196099046088/Download.ashx?hash=2.2">3.5.9-12.Y</a><br />
                    <a href="https://files5.pdesas.org/218016009165101144029064169036221224213241150080/Download.ashx?hash=2.2">3.5.9-12.Z</a><br />
                    <a href="https://files5.pdesas.org/149213032052197026132254253151201049243198145246/Download.ashx?hash=2.2">3.5.9-12.AA</a><br />
                    <a href="https://files5.pdesas.org/249184236118237112138065070190000199084023253024/Download.ashx?hash=2.2">3.5.9-12.BB</a><br />
                    <a href="http://3.5.9-12.cc/">3.5.9-12.CC</a><br />
                    <a href="https://files5.pdesas.org/197238055252153094143065148199115037049138044165/Download.ashx?hash=2.2">3.5.9-12.DD</a><br />
                    <a href="http://3.5.9-12.ee/">3.5.9-12.EE</a><br />
                    <a href="https://files5.pdesas.org/032025139214174115183071096225141249015101015060/Download.ashx?hash=2.2">3.5.9-12.FF</a><br />
                    <a href="http://3.5.9-12.gg/">3.5.9-12.GG</a><br />
                    <a href="https://files5.pdesas.org/114003223167020173025105175046147010120126247146/Download.ashx?hash=2.2">3.5.9-12.HH</a><br />
                    <a href="https://files5.pdesas.org/089203008055170191203171253120135065201130149157/Download.ashx?hash=2.2">3.5.9-12.II</a><br />
                    <a href="https://files5.pdesas.org/012209034124107101068032160009103186093025233023/Download.ashx?hash=2.2">3.5.9-12.JJ</a><br />
                    <a href="https://files5.pdesas.org/103171053189214131033248024129036047047157069240/Download.ashx?hash=2.2">3.5.9-12.KK</a><br />
                    <a href="https://files5.pdesas.org/222150208161165221218230117007195241191135055206/Download.ashx?hash=2.2">3.5.9-12.LL</a><br />
                    <a href="http://3.5.9-12.mm/">3.5.9-12.MM</a><br />
                    <a href="https://files5.pdesas.org/207201150035116097240055227025066240219081204073/Download.ashx?hash=2.2">3.5.9-12.NN</a><br />
                    <a href="https://files5.pdesas.org/010138063158210172055107071198238162242194167171/Download.ashx?hash=2.2">3.5.9-12.OO</a><br />
                    <a href="https://files5.pdesas.org/223183051006182031178026012150050197228050027199/Download.ashx?hash=2.2">3.5.9-12.PP</a><br />
                    </>)}
                    <button onClick={toggleAdvanced} className="show-all-button">
                        {showAdvanced ? "Show Less" : "Show All"}
                    </button>
                </div>
                <div class="collapse-arrow-container" onClick={toggleSteels}>
                    <span class="collapse-arrow">▲</span>
                </div>
            </div> 
            )}
            <button onClick={togglePlatforms} className="toggle-button">
                <h2>Additional Platforms</h2>
            </button>
            {showPlatforms && (
            <div className="platforms-container">
                <div className="box">
                    <h3><a href="https://sip.scratch.mit.edu/scratchathome/">Scratch</a></h3>
                    <p>Scratch is a free, block-based programming platform developed by the MIT Media Lab, primarily aimed at children aged 8 to 16. It allows users to create interactive stories, games, animations, and more by snapping together visual coding blocks.</p>
                    <p>Scratch is designed to make programming accessible and fun, even for beginners with no prior experience in coding. Refer to the "Scratch Module" for an introduction to Scratch!</p>
                </div>
                <div className="box">
                    <h3><a href="https://code.org/">Code Org</a></h3>
                    <p>Code.org is a nonprofit organization focused on promoting computer science education, particularly for students in K-12. Its mission is to make computer science accessible to every student, especially underrepresented groups such as girls and minorities</p>
                    <p>Code.org provides free resources, courses, and tools to teach coding and computational thinking, offering interactive lessons in languages like JavaScript and block-based coding</p>
                </div>
                <div className="box">
                    <h3><a href="https://replit.com/">Replit</a></h3>
                    <p>Replit is an online platform designed for coding, learning, and collaboration. It provides an integrated development environment (IDE) in the cloud, where users can write, run, and share code in multiple programming languages directly from their browser.</p>
                    <p>Replit is widely used by beginners, educators, and experienced developers for learning to code, building projects, and working on collaborative coding tasks.</p>
                </div>
                <div class="collapse-arrow-container" onClick={togglePlatforms}>
                    <span class="collapse-arrow">▲</span>
                </div>
            </div>
            )}
            <button onClick={toggleProjects} className="toggle-button">
                <h2>Project Ideas</h2>
            </button>
            {showProjects && (
            <div className="projects-container">
                <div className="box">
                    <h3>Animated Greeting Card</h3>
                    <p>Using online platforms such as Scratch or Code.org or even through expanding on our HTML module, we encourage you to create an animated greeting card</p>
                    <p>Include pictures, animations, styling, and festive messages! Put what you love on the card! </p>
                </div>
                <div className="box">
                    <h3>Encryption/Decryption Tool</h3>
                    <p>Write a simple program that encrypts/decrypts a message using a cipher --- such as the caesar cipher as taught in our module. Using online code compilers or their own personal IDE, and utilizing string manipulation, loops, and other core cs concepts, create your down crypto program!</p>
                </div>
                <div class="collapse-arrow-container" onClick={toggleProjects}>
                    <span class="collapse-arrow">▲</span>
                </div>
            </div>
            )}
        
            <button onClick={toggleTechRecommendations} className="toggle-button">
                <h2>Technology Recommendations</h2>
            </button>
            {showTechRecommendations && (
            <div className="projects-container">
                <div className="box">
                    <h3>IDEs: All IDEs listed below are free or free under student accounts</h3>
                    <div className="left-alignedP">VSCode: a highly customizable and lightweight code editor that is compatibe with most programming languages, making it a versatile beginner friendly IDE</div>
                    <div className="left-alignedP">PyCharm: a full-featured IDE specifically for Python, with code completion, debugging, and extensive libraries</div>
                    <div className="left-alignedP">Jupyter Notebook: Popular for data science and educational use, supporting interactive coding</div>
                    <div className="left-alignedP">IntelliJ IDEA: Widely regarded as one of the best IDEs for Java development, with robust features for enterprise applications</div>
                    <div className="left-alignedP">Eclipse: A free, open-source IDE commonly used for Java development, known for its plugins</div>
                    <div className="left-alignedP">CLion: A powerful IDE by JetBrains for C/C++, with smart code completion and debugging tools</div>
                </div>
                <div className="box">
                    <h3>Languages</h3>
                    <div className="left-alignedP">Python: A high-level, interpreted language known for its readability and simplicity. It's widely used in web development, data analysis, artificial intelligence, scientific computing, and automation</div>
                    <div className="left-alignedP">JavaScript:  A versatile, high-level scripting language primarily used for web development to create interactive and dynamic web pages. It runs in the browser and is also popular for server-side development using Node.js</div>
                    <div className="left-alignedP">Java: A widely-used, object-oriented programming language designed for portability across platforms. It’s commonly used in enterprise applications, Android app development, and large systems</div>
                    <div className="left-alignedP">C++: An extension of the C programming language that includes object-oriented features. It’s widely used in systems programming, game development, and applications requiring high performance</div>
                    <div className="left-alignedP">C# :A modern, object-oriented language developed by Microsoft, primarily used for developing Windows applications and games (using Unity). It's part of the .NET framework and is known for its performance and security features</div>
                </div>
                <div class="collapse-arrow-container" onClick={toggleTechRecommendations}>
                    <span class="collapse-arrow">▲</span>
                </div>
            </div>
            )}
            </div>
        </div>
    );
}

export default ResourcesPage;