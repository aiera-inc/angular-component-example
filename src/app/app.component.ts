import { Component } from '@angular/core';
import { Aiera } from 'aiera-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ngOnInit() {
    const eventList = new Aiera.Module(
      'https://public.aiera.com/aiera-sdk/0.0.47/modules/EventList/index.html',
      'example_iframe1'
    );
    eventList.load().then(() => {
      eventList.authenticateApiKey('9b9a25ca85b41fb3c136f9814e7e8105');
    });
    eventList.on('authenticated', () => {
      eventList.configure({
        hideSettings: true,
        options: {
          showCompanyFilter: false,
          //ticker: 'meta',
          //eventListView: 'combined',
          eventListFilters: [
            { name: 'transcripts', visible: true, defaultValue: true },
            { name: 'earningsOnly', visible: true, defaultValue: true },
          ],
          showPartials: true,
          showSentiment: true,
        },
        overrides: {
          //   style: `
          //         .eventlist__filterby {
          //             background-color: blue
          //         }
          //     `,
        },
        tracking: {
          userId: '123abc',
        },
      });
    });

    eventList.on('configured', () => {
      eventList.setWatchlist([
        { BBG: 'PETZ3:BZ' },
        { BBG: 'ALGN:US' },
        { BBG: 'HBC:VN' },
        { BBG: 'GPN:US' },
        { BBG: 'ATD:CN' },
        { BBG: 'DLG:LN' },
        { BBG: 'AXP:US' },
        { BBG: 'B:US' },
        { BBG: 'TOU:CN' },
        { BBG: 'ABX:CN' },
        { BBG: 'RL:US' },
        { BBG: 'GIS:US' },
        { BBG: 'SU:CN' },
        { BBG: 'PFE:US' },
        { BBG: 'AMCR:US' },
        { BBG: 'HST:US' },
        { BBG: 'ABBV:US' },
        { BBG: 'CCP:LN' },
        { BBG: 'MCK:US' },
        { BBG: 'PPG:US' },
        { BBG: 'CRWD:US' },
        { BBG: 'ARRY:US' },
        { BBG: 'LUMN:US' },
        { BBG: 'WMT:US' },
        { BBG: 'GLPG:US' },
        { BBG: 'DVN:US' },
        { BBG: 'PPL:US' },
        { BBG: 'DLR:US' },
        { BBG: 'MGM:US' },
        { BBG: 'ALL:US' },
        { BBG: 'NOV:US' },
        { BBG: 'LSCC:US' },
        { BBG: 'BX:US' },
        { BBG: 'TLV:RO' },
        { BBG: 'AMBA:US' },
        { BBG: 'MOS:US' },
        { BBG: 'NFE:US' },
        { BBG: 'RSG:US' },
        { BBG: 'EL:US' },
        { BBG: 'J:US' },
        { BBG: 'GAZP:RM' },
        { BBG: '5332:JP' },
        { BBG: 'REG:US' },
        { BBG: 'UP:US' },
        { BBG: 'HUBG:US' },
        { BBG: 'BERY:US' },
        { BBG: 'TROW:US' },
        { BBG: 'OUT:US' },
        { BBG: 'EVO:SS' },
        { BBG: 'LDOS:US' },
        { BBG: 'HUBB:US' },
        { BBG: 'MELI:US' },
        { BBG: 'CRL:US' },
        { BBG: 'NKE:US' },
        { BBG: 'MDB:US' },
        { BBG: 'YETI:US' },
        { BBG: 'ATO:US' },
        { BBG: 'GH:US' },
        { BBG: 'CERN:US' },
        { BBG: 'MPWR:US' },
        { BBG: 'COF:US' },
        { BBG: 'WMB:US' },
        { BBG: 'CPB:US' },
        { BBG: 'LEG:US' },
        { BBG: '2884:TT' },
        { BBG: 'BKNG:US' },
        { BBG: 'NBIX:US' },
        { BBG: 'ADYEN:NA' },
        { BBG: 'MDLZ:US' },
        { BBG: 'EXPE:US' },
        { BBG: 'MA:US' },
        { BBG: 'REGN:US' },
        { BBG: 'CTRA:US' },
        { BBG: 'T:US' },
        { BBG: 'ENPH:US' },
        { BBG: 'CNQ:AU' },
        { BBG: 'FOXA:US' },
        { BBG: 'COP:US' },
        { BBG: 'CHD:US' },
        { BBG: 'POOL:US' },
        { BBG: 'CHDN:US' },
        { BBG: 'TJX:US' },
        { BBG: 'CBOE:US' },
        { BBG: 'STE:US' },
        { BBG: 'GLEN:LN' },
        { BBG: '9688:HK' },
        { BBG: 'GEVO:US' },
        { BBG: 'YUM:US' },
        { BBG: 'PZA:US' },
        { BBG: 'SGRY:US' },
        { BBG: 'GWW:US' },
        { BBG: 'ORCL:US' },
        { BBG: 'ABI:BB' },
        { BBG: 'GILD:US' },
        { BBG: 'ALT:US' },
        { BBG: 'AWK:US' },
        { BBG: 'SE:US' },
        { BBG: 'CZR:US' },
        { BBG: 'OKTA:US' },
        { BBG: 'WBA:US' },
        { BBG: 'EQC:US' },
        { BBG: 'BBY:US' },
        { BBG: '6098:JP' },
        { BBG: 'JMP:US' },
        { BBG: 'BKR:US' },
        { BBG: 'BR:US' },
        { BBG: 'NDAQ:US' },
        { BBG: 'KRNT:US' },
        { BBG: 'VNO:US' },
        { BBG: 'IBM:US' },
        { BBG: 'NI:US' },
        { BBG: 'IEX:US' },
        { BBG: 'BLL:US' },
        { BBG: 'PLD:US' },
        { BBG: 'CDNS:US' },
        { BBG: 'SNOW:US' },
        { BBG: 'BPMC:US' },
        { BBG: 'CME:US' },
        { BBG: 'FNV:CN' },
        { BBG: 'STT:US' },
        { BBG: 'ROL:US' },
        { BBG: 'SWK:US' },
        { BBG: 'TSLA:US' },
        { BBG: 'FRT:US' },
        { BBG: 'ARCB:US' },
        { BBG: 'IDXX:US' },
        { BBG: 'FFH:CN' },
        { BBG: 'BDX:US' },
        { BBG: 'LEN:US' },
        { BBG: 'A:US' },
        { BBG: 'AMZN:US' },
        { BBG: 'INTU:US' },
        { BBG: 'LUV:US' },
        { BBG: '005380:KS' },
        { BBG: 'LHX:US' },
        { BBG: 'VMC:US' },
        { BBG: 'RBLX:US' },
        { BBG: 'WSM:US' },
        { BBG: 'MTD:US' },
        { BBG: 'PCAR:US' },
        { BBG: 'CL:US' },
        { BBG: 'WFC:US' },
        { BBG: 'L:US' },
        { BBG: 'LEGN:US' },
        { BBG: 'CARR:US' },
        { BBG: 'LKQ:US' },
        { BBG: 'CMS:US' },
        { BBG: 'PH:US' },
        { BBG: 'APH:US' },
        { BBG: 'PM:US' },
        { BBG: '064260:KS' },
        { BBG: 'IQV:US' },
        { BBG: 'RIVN:US' },
        { BBG: 'ISRG:US' },
        { BBG: 'KSU:US' },
        { BBG: 'YNDX:US' },
        { BBG: 'QCOM:US' },
        { BBG: 'TRI:CN' },
        { BBG: 'TDG:US' },
        { BBG: 'HLT:US' },
        { BBG: 'CMCSA:US' },
        { BBG: 'ARGX:BB' },
        { BBG: 'AV/:LN' },
        { BBG: 'HDFCB:IN' },
        { BBG: '000660:KS' },
        { BBG: 'ECL:US' },
        { BBG: 'PEAK:US' },
        { BBG: '6146:TT' },
        { BBG: 'AJG:US' },
        { BBG: 'IFF:US' },
        { BBG: 'NTRS:US' },
        { BBG: 'EYE:US' },
        { BBG: 'ONON:US' },
        { BBG: 'ALNY:US' },
        { BBG: 'HOLX:US' },
        { BBG: 'LW:US' },
        { BBG: 'CLX:US' },
        { BBG: 'MS:US' },
        { BBG: 'TRMB:US' },
        { BBG: 'COST:US' },
        { BBG: 'LYFT:US' },
        { BBG: 'PWR:US' },
        { BBG: 'WLTW:US' },
        { BBG: 'SSNC:US' },
        { BBG: 'TECH:US' },
        { BBG: 'UNP:US' },
        { BBG: 'SHW:US' },
        { BBG: 'IVN:CN' },
        { BBG: 'APT:US' },
        { BBG: 'MAGE:RM' },
        { BBG: 'AMAT:US' },
        { BBG: 'OXY:US' },
        { BBG: 'BAM/A:CN' },
        { BBG: 'PENN:US' },
        { BBG: '055550:KS' },
        { BBG: 'GATO:US' },
        { BBG: 'EIX:US' },
        { BBG: 'BAX:US' },
        { BBG: 'ABT:US' },
        { BBG: 'FANG:US' },
        { BBG: 'FBHS:US' },
        { BBG: 'ROST:US' },
        { BBG: 'CMA:US' },
        { BBG: 'VFC:US' },
        { BBG: 'ATR:US' },
        { BBG: 'GD:US' },
        { BBG: 'ZBRA:US' },
        { BBG: 'AEE:US' },
        { BBG: 'PSTG:US' },
        { BBG: 'LNC:US' },
        { BBG: 'WU:US' },
        { BBG: 'GE:US' },
        { BBG: 'AVGO:US' },
        { BBG: 'EVRG:US' },
        { BBG: 'FDX:US' },
        { BBG: 'HD:US' },
        { BBG: 'LOW:US' },
        { BBG: 'MOAT:US' },
        { BBG: 'TPR:US' },
        { BBG: 'HWM:US' },
        { BBG: 'VZ:US' },
        { BBG: 'MC:FP' },
        { BBG: 'ZBH:US' },
        { BBG: 'BIO:US' },
        { BBG: 'CTSH:US' },
        { BBG: 'GNRC:US' },
        { BBG: 'VRSN:US' },
        { BBG: 'CBG:LN' },
        { BBG: 'WHR:US' },
        { BBG: 'GPS:US' },
        { BBG: 'WDAY:US' },
        { BBG: 'C:US' },
        { BBG: '126:HK' },
        { BBG: 'CINF:US' },
        { BBG: 'UAA:US' },
        { BBG: 'EW:US' },
        { BBG: 'XPO:US' },
        { BBG: 'CERE:US' },
        { BBG: 'GFL:US' },
        { BBG: 'ZION:US' },
        { BBG: 'ELV:US' },
        { BBG: 'PTC:US' },
        { BBG: 'ALK:US' },
        { BBG: 'CBRE:US' },
        { BBG: 'APD:US' },
        { BBG: 'PGR:US' },
        { BBG: 'BMRN:US' },
        { BBG: 'CORR:US' },
        { BBG: 'KEYS:US' },
        { BBG: 'XYL:US' },
        { BBG: 'VRSK:US' },
        { BBG: 'JKHY:US' },
        { BBG: 'DIS:US' },
        { BBG: 'KDP:US' },
        { BBG: 'SHOP:CN' },
        { BBG: 'BIIB:US' },
        { BBG: 'ABC:US' },
        { BBG: 'DE:US' },
        { BBG: 'DOW:US' },
        { BBG: 'INTC:US' },
        { BBG: 'XRAY:US' },
        { BBG: 'EBO:NZ' },
        { BBG: 'BTO:CN' },
        { BBG: 'SQ:US' },
        { BBG: 'TTWO:US' },
        { BBG: 'EPAM:US' },
        { BBG: 'SEDG:US' },
        { BBG: 'TER:US' },
        { BBG: 'CG:US' },
        { BBG: 'OTP:HB' },
        { BBG: 'LLY:US' },
        { BBG: 'FAD:US' },
        { BBG: 'COMI:EY' },
        { BBG: 'MMM:US' },
        { BBG: 'ADS:GR' },
        { BBG: 'DD:US' },
        { BBG: 'HUM:US' },
        { BBG: 'HPQ:US' },
        { BBG: 'IPGP:US' },
        { BBG: 'ROP:US' },
        { BBG: 'DFS:US' },
        { BBG: 'SRL:AU' },
        { BBG: '2359:HK' },
        { BBG: 'HPE:US' },
        { BBG: 'AMP:US' },
        { BBG: 'EXC:US' },
        { BBG: 'DISCA:US' },
        { BBG: 'DISH:US' },
        { BBG: 'WAB:US' },
        { BBG: 'DISCK:US' },
        { BBG: 'SCHW:US' },
        { BBG: 'VRT:US' },
        { BBG: 'WTM:US' },
        { BBG: '000652:C2' },
        { BBG: 'SJM:US' },
        { BBG: 'BIR:CN' },
        { BBG: 'BOIL:US' },
        { BBG: 'OPCH:US' },
        { BBG: 'ROO:LN' },
        { BBG: 'MTCH:US' },
        { BBG: 'PAYC:US' },
        { BBG: 'JD/:LN' },
        { BBG: 'ALLE:US' },
        { BBG: 'DGX:US' },
        { BBG: 'VRTX:US' },
        { BBG: 'VOD:US' },
        { BBG: 'CLR:US' },
        { BBG: 'GRMN:US' },
        { BBG: 'DASH:US' },
        { BBG: 'MRNA:US' },
        { BBG: 'PVH:US' },
        { BBG: 'BA:US' },
        { BBG: 'FCX:US' },
        { BBG: 'UWM:US' },
        { BBG: 'AAQ1:GR' },
        { BBG: 'MAXD:US' },
        { BBG: 'SIKA:SW' },
        { BBG: 'GBAB:US' },
        { BBG: 'ES:US' },
        { BBG: 'AKAM:US' },
        { BBG: 'ALEC:US' },
        { BBG: 'RMD:US' },
        { BBG: 'PARA:US' },
        { BBG: 'WEC:US' },
        { BBG: 'ZM:US' },
        { BBG: 'ODFL:US' },
        { BBG: 'PSX:US' },
        { BBG: 'DXCM:US' },
        { BBG: 'OFIH:MK' },
        { BBG: 'MET:US' },
        { BBG: 'WLK:US' },
        { BBG: 'DG:US' },
        { BBG: 'BBWI:US' },
        { BBG: 'IVZ:US' },
        { BBG: 'EFX:US' },
        { BBG: 'DOCU:US' },
        { BBG: 'NCLH:US' },
        { BBG: 'JBHT:US' },
        { BBG: 'HAL:US' },
        { BBG: 'ED:US' },
        { BBG: 'DLTR:US' },
        { BBG: 'IFC:CN' },
        { BBG: 'DOL:CN' },
        { BBG: 'VIVE:US' },
        { BBG: 'SAP:GR' },
        { BBG: 'MRVL:US' },
        { BBG: 'BK:US' },
        { BBG: 'NDSN:US' },
        { BBG: 'GPC:US' },
        { BBG: 'RE:US' },
        { BBG: 'ULTA:US' },
        { BBG: 'STX:US' },
        { BBG: 'QRVO:US' },
        { BBG: 'BMBL:US' },
        { BBG: 'AAL:LN' },
        { BBG: 'ADBE:US' },
        { BBG: '3201:JP' },
        { BBG: 'HBAN:US' },
        { BBG: 'BAYN:GR' },
        { BBG: 'MSFT:US' },
        { BBG: '600009:C1' },
        { BBG: 'MNST:US' },
        { BBG: 'NSC:US' },
        { BBG: 'TWE:AU' },
        { BBG: '7203:JP' },
        { BBG: 'LYB:US' },
        { BBG: 'ROK:US' },
        { BBG: 'VLO:US' },
        { BBG: 'IR:US' },
        { BBG: 'CI:US' },
        { BBG: 'CB:US' },
        { BBG: 'ASML:US' },
        { BBG: 'ALC:US' },
        { BBG: 'HSY:US' },
        { BBG: '7267:JP' },
        { BBG: 'MDT:US' },
        { BBG: '601111:C1' },
        { BBG: 'ITCI:US' },
        { BBG: 'WM:US' },
        { BBG: 'BO:IM' },
        { BBG: 'ADI:US' },
        { BBG: 'DGE:LN' },
        { BBG: 'EXPD:US' },
        { BBG: 'PKG:US' },
        { BBG: '5434:TT' },
        { BBG: 'FLT:US' },
        { BBG: 'ORLY:US' },
        { BBG: 'UPS:US' },
        { BBG: 'ANSS:US' },
        { BBG: 'BMW:GR' },
        { BBG: 'TFC:US' },
        { BBG: 'DUOL:US' },
        { BBG: 'FTNT:US' },
        { BBG: 'AGIO:US' },
        { BBG: 'EQR:US' },
        { BBG: 'SWKS:US' },
        { BBG: 'PINS:US' },
        { BBG: 'ADSK:US' },
        { BBG: 'CCI:US' },
        { BBG: 'LULU:US' },
        { BBG: 'URI:US' },
        { BBG: 'EQIX:US' },
        { BBG: 'CLT:AU' },
        { BBG: 'AAP:US' },
        { BBG: 'SBAC:US' },
        { BBG: 'PNR:US' },
        { BBG: 'GMAB:DC' },
        { BBG: 'WRK:US' },
        { BBG: 'OMC:US' },
        { BBG: 'MKTX:US' },
        { BBG: 'HON:US' },
        { BBG: 'PBR:US' },
        { BBG: 'ARE:US' },
        { BBG: 'ARVN:US' },
        { BBG: 'NOC:US' },
        { BBG: 'DCT:US' },
        { BBG: 'SNA:US' },
        { BBG: 'TFX:US' },
        { BBG: 'CSCO:US' },
        { BBG: 'TDY:US' },
        { BBG: 'AFL:US' },
        { BBG: 'WRB:US' },
        { BBG: 'BMY:US' },
        { BBG: 'CRUS:US' },
        { BBG: 'TOST:US' },
        { BBG: 'CTVA:US' },
        { BBG: 'FISV:US' },
        { BBG: 'MRK:US' },
        { BBG: 'JCI:US' },
        { BBG: 'NG:US' },
        { BBG: 'FE:US' },
        { BBG: 'RF:US' },
        { BBG: 'RY:CN' },
        { BBG: 'VWS:DC' },
        { BBG: 'FORD:US' },
        { BBG: '3092:JP' },
        { BBG: 'FWONK:US' },
        { BBG: 'CAH:US' },
        { BBG: 'WAT:US' },
        { BBG: 'BXP:US' },
        { BBG: 'AIZ:US' },
        { BBG: 'ASO:US' },
        { BBG: 'AIG:US' },
        { BBG: 'JNPR:US' },
        { BBG: 'BSX:US' },
        { BBG: 'CSX:US' },
        { BBG: 'ATVI:US' },
        { BBG: 'CLF:US' },
        { BBG: 'TYL:US' },
        { BBG: 'CTAS:US' },
        { BBG: 'BJ:US' },
        { BBG: 'AYI:US' },
        { BBG: 'AES:US' },
        { BBG: 'DXC:US' },
        { BBG: 'CHTR:US' },
        { BBG: 'DUK:US' },
        { BBG: 'LAND:LN' },
        { BBG: 'DBX:US' },
        { BBG: 'NWL:US' },
        { BBG: 'EXR:US' },
        { BBG: 'TRV:US' },
        { BBG: 'TA:US' },
        { BBG: 'CLVT:US' },
        { BBG: 'MRO:US' },
        { BBG: 'AZN:US' },
        { BBG: 'AZN:LN' },
        { BBG: 'NUE:US' },
        { BBG: 'TOL:US' },
        { BBG: 'ZI:US' },
        { BBG: 'RIL:IN' },
        { BBG: 'SAGA:NO' },
        { BBG: 'TSCO:US' },
        { BBG: 'ACN:US' },
        { BBG: 'GLBE:US' },
        { BBG: 'EOG:US' },
        { BBG: 'RPRX:US' },
        { BBG: 'XOM:US' },
        { BBG: 'TSN:US' },
        { BBG: 'GLW:US' },
        { BBG: 'JNJ:US' },
        { BBG: 'WMG:US' },
        { BBG: 'SNVP:US' },
        { BBG: 'IRM:US' },
        { BBG: 'BRK/A:US' },
        { BBG: 'CVS:US' },
        { BBG: 'BRK/B:US' },
        { BBG: 'SKT:NZ' },
        { BBG: 'HBI:US' },
        { BBG: 'TWTR:US' },
        { BBG: 'RCL:US' },
        { BBG: 'TEVA:US' },
        { BBG: 'MML:LN' },
        { BBG: 'MT:US' },
        { BBG: 'UA:US' },
        { BBG: 'ON:US' },
        { BBG: 'MMC:US' },
        { BBG: 'PEP:US' },
        { BBG: 'WELL:US' },
        { BBG: 'GS:US' },
        { BBG: 'NEM:US' },
        { BBG: 'LNT:US' },
        { BBG: 'RTX:US' },
        { BBG: 'BWA:US' },
        { BBG: 'CICT:SP' },
        { BBG: 'AFRM:US' },
        { BBG: 'LAD:US' },
        { BBG: 'CLH:US' },
        { BBG: 'FB:US' },
        { BBG: 'AOS:US' },
        { BBG: 'KLAC:US' },
        { BBG: 'LPZ30 Comdty' },
        { BBG: 'CNQ:CN' },
        { BBG: 'BJC/F:TB' },
        { BBG: 'ILMN:US' },
        { BBG: 'DAL:US' },
        { BBG: 'DHR:US' },
        { BBG: 'PRU:US' },
        { BBG: 'ADM:US' },
        { BBG: 'CHG:LN' },
        { BBG: 'WST:US' },
        { BBG: 'LIN:US' },
        { BBG: 'HCA:US' },
        { BBG: 'MPC:US' },
        { BBG: 'BAC:US' },
        { BBG: 'ITW:US' },
        { BBG: 'CSL:US' },
        { BBG: 'SONY:US' },
        { BBG: 'KSS:US' },
        { BBG: 'FMC:US' },
        { BBG: 'THC:US' },
        { BBG: 'W:US' },
        { BBG: 'CARA:US' },
        { BBG: 'ANET:US' },
        { BBG: 'CFG:US' },
        { BBG: 'ESS:US' },
        { BBG: 'SLGN:US' },
        { BBG: 'VTRS:US' },
        { BBG: 'V:US' },
        { BBG: 'AMD:US' },
        { BBG: 'ZLAB:US' },
        { BBG: 'UTHR:US' },
        { BBG: 'BEST:US' },
        { BBG: '3571:JP' },
        { BBG: 'FFIV:US' },
        { BBG: 'EQT:US' },
        { BBG: 'NVDA:US' },
        { BBG: 'UAL:US' },
        { BBG: 'PMT:US' },
        { BBG: 'CE:US' },
        { BBG: 'CP:CN' },
        { BBG: 'COLM:US' },
        { BBG: 'MAR:US' },
        { BBG: 'HII:US' },
        { BBG: 'ADP:US' },
        { BBG: '102710:KS' },
        { BBG: 'RHI:US' },
        { BBG: 'TGT:US' },
        { BBG: 'UNH:US' },
        { BBG: 'CRSP:US' },
        { BBG: 'NTR:US' },
        { BBG: 'ETN:US' },
        { BBG: 'JPM:US' },
        { BBG: 'AZO:US' },
        { BBG: 'MO:US' },
        { BBG: 'FRC:US' },
        { BBG: 'ETFMIB:IM' },
        { BBG: 'VDC:US' },
        { BBG: 'KHC:US' },
        { BBG: 'FIS:US' },
        { BBG: 'CGS:LN' },
        { BBG: 'SYK:US' },
        { BBG: 'OKE:US' },
        { BBG: 'ZTS:US' },
        { BBG: 'O:US' },
        { BBG: 'CAG:US' },
        { BBG: 'UDR:US' },
        { BBG: 'CMG:US' },
        { BBG: 'LVS:US' },
        { BBG: 'NLOK:US' },
        { BBG: 'HP:US' },
        { BBG: 'RJF:US' },
        { BBG: 'DELL:US' },
        { BBG: 'VODPF:US' },
        { BBG: 'ETSY:US' },
        { BBG: 'AQMIX:US' },
        { BBG: 'FND:US' },
        { BBG: 'CTXS:US' },
        { BBG: 'ARGX:US' },
        { BBG: '4629:JP' },
        { BBG: 'BP/:LN' },
        { BBG: 'COIN:US' },
        { BBG: 'AVB:US' },
        { BBG: 'MTB:US' },
        { BBG: 'WYNN:US' },
        { BBG: 'ICE:US' },
        { BBG: 'CROX:US' },
        { BBG: 'MP:US' },
        { BBG: 'MSCI:US' },
        { BBG: 'LYV:US' },
        { BBG: 'ATAD:LI' },
        { BBG: 'SYNA:US' },
        { BBG: 'USB:US' },
        { BBG: 'T:CN' },
        { BBG: 'GOOGL:US' },
        { BBG: 'PYPL:US' },
        { BBG: 'BOI:IN' },
        { BBG: 'VIC:VN' },
        { BBG: 'CDAY:US' },
        { BBG: 'COKE:US' },
        { BBG: 'CDW:US' },
        { BBG: 'KO:US' },
        { BBG: 'SAN:SM' },
        { BBG: '600794:C1' },
        { BBG: 'PFG:US' },
        { BBG: 'ACOMO:NA' },
        { BBG: 'GOOG:US' },
        { BBG: 'TR:US' },
        { BBG: 'CTLT:US' },
        { BBG: 'FOX:US' },
        { BBG: 'HQY:US' },
        { BBG: 'CR:US' },
        { BBG: 'EMR:US' },
        { BBG: 'ABMD:US' },
        { BBG: 'NRG:US' },
        { BBG: 'STZ:US' },
        { BBG: 'SNPS:US' },
        { BBG: 'BHVN:US' },
        { BBG: 'JAZZ:US' },
        { BBG: 'AIN:US' },
        { BBG: 'EA:US' },
        { BBG: 'SEE:US' },
        { BBG: 'F:US' },
        { BBG: 'PCG:US' },
        { BBG: 'ADM:LN' },
        { BBG: 'CF:US' },
        { BBG: 'UNTR:IJ' },
        { BBG: 'IKOR:LN' },
        { BBG: 'OA:IN' },
        { BBG: 'FTI:US' },
        { BBG: '1299:HK' },
        { BBG: 'NG:CN' },
        { BBG: 'MSI:US' },
        { BBG: 'G:US' },
        { BBG: 'FIGS:US' },
        { BBG: 'COO:US' },
        { BBG: 'CVNA:US' },
        { BBG: 'KEY:US' },
        { BBG: 'NUVB:US' },
        { BBG: 'SPG:US' },
        { BBG: 'DECK:US' },
        { BBG: 'CHRW:US' },
        { BBG: 'SO:US' },
        { BBG: 'CPSS:US' },
        { BBG: 'SIGI:US' },
        { BBG: 'PANW:US' },
        { BBG: 'AME:US' },
        { BBG: 'AMT:US' },
        { BBG: 'PNW:US' },
        { BBG: 'FITB:US' },
        { BBG: 'CMI:US' },
        { BBG: 'HIG:US' },
        { BBG: 'MCHP:US' },
        { BBG: 'KMB:US' },
        { BBG: 'NWS:US' },
        { BBG: 'AVY:US' },
        { BBG: 'MCO:US' },
        { BBG: 'BURL:US' },
        { BBG: 'PHM:US' },
        { BBG: 'CHKP:US' },
        { BBG: 'ROG:SW' },
        { BBG: 'AMGN:US' },
        { BBG: 'INFO:US' },
        { BBG: 'OTIS:US' },
        { BBG: 'VOD:LN' },
        { BBG: 'ULH:US' },
        { BBG: 'LNG:US' },
        { BBG: 'NWSA:US' },
        { BBG: 'MU:US' },
        { BBG: 'CVE:CN' },
        { BBG: 'CNC:US' },
        { BBG: 'TEAM:US' },
        { BBG: 'NEE:US' },
        { BBG: 'ABNB:US' },
        { BBG: 'PKI:US' },
        { BBG: 'PAYX:US' },
        { BBG: 'IT:US' },
        { BBG: 'WDC:US' },
        { BBG: 'KIM:US' },
        { BBG: 'DVA:US' },
        { BBG: '000001:C2' },
        { BBG: 'MKC:US' },
        { BBG: 'PSA:US' },
        { BBG: 'PEG:US' },
        { BBG: 'MAA:US' },
        { BBG: 'ETR:US' },
        { BBG: 'MLM:US' },
        { BBG: 'PXD:US' },
        { BBG: 'IP:US' },
        { BBG: 'NVR:US' },
        { BBG: 'DHI:US' },
        { BBG: 'TXT:US' },
        { BBG: 'STMN:SW' },
        { BBG: 'AON:US' },
        { BBG: 'UHS:US' },
        { BBG: 'SYY:US' },
        { BBG: 'K:US' },
        { BBG: 'WY:US' },
        { BBG: '600513:C1' },
        { BBG: 'CNP:US' },
        { BBG: 'EWJ:US' },
        { BBG: 'STLD:US' },
        { BBG: 'VONE:US' },
        { BBG: 'MHK:US' },
        { BBG: 'KMI:US' },
        { BBG: 'CRM:US' },
        { BBG: 'HES:US' },
        { BBG: 'APTV:US' },
        { BBG: 'MCD:US' },
        { BBG: '051910:KS' },
        { BBG: 'CAT:US' },
        { BBG: 'LH:US' },
        { BBG: 'ONCE:US' },
        { BBG: 'TXN:US' },
        { BBG: 'SBUX:US' },
        { BBG: 'DTE:US' },
        { BBG: 'EFA:US' },
        { BBG: 'TREE:US' },
        { BBG: 'TT:US' },
        { BBG: 'GL:US' },
        { BBG: 'CPRT:US' },
        { BBG: 'TD:CN' },
        { BBG: 'BILL:US' },
        { BBG: 'KMX:US' },
        { BBG: 'EBAY:US' },
        { BBG: 'MOH:US' },
        { BBG: 'HSIC:US' },
        { BBG: 'LRCX:US' },
        { BBG: 'BBCA:IJ' },
        { BBG: 'D:US' },
        { BBG: 'SRE:US' },
        { BBG: 'BEN:US' },
        { BBG: 'NLSN:US' },
        { BBG: 'XEL:US' },
        { BBG: 'INCY:US' },
        { BBG: 'FTV:US' },
        { BBG: 'H:US' },
        { BBG: '200625:CH' },
        { BBG: 'HOOK:US' },
        { BBG: 'VEEV:US' },
        { BBG: 'NXPI:US' },
        { BBG: 'PNC:US' },
        { BBG: 'AAL:US' },
        { BBG: 'HRL:US' },
        { BBG: 'NOW:US' },
        { BBG: 'XLNX:US' },
        { BBG: 'NVEI:CN' },
        { BBG: 'EQNR:NO' },
        { BBG: 'EMN:US' },
        { BBG: 'TAP:US' },
        { BBG: 'GIM:US' },
        { BBG: 'LGRDY:US' },
        { BBG: 'PBCT:US' },
        { BBG: '8066:JP' },
        { BBG: 'MAS:US' },
        { BBG: 'DPZ:US' },
        { BBG: 'DRE:US' },
        { BBG: 'BRO:US' },
        { BBG: '1858543D:FP' },
        { BBG: 'SR:US' },
        { BBG: 'CVX:US' },
        { BBG: 'NESN:SW' },
        { BBG: 'BF/B:US' },
        { BBG: 'PG:US' },
        { BBG: 'SPGI:US' },
        { BBG: 'DRI:US' },
        { BBG: 'VTR:US' },
        { BBG: 'ALB:US' },
        { BBG: 'AEP:US' },
        { BBG: 'AR:US' },
        { BBG: 'TMUS:US' },
        { BBG: 'NFLX:US' },
        { BBG: '8931:TT' },
        { BBG: 'NTLA:US' },
        { BBG: 'NTAP:US' },
        { BBG: 'CCL:US' },
        { BBG: 'TEL:US' },
        { BBG: 'GM:US' },
        { BBG: 'HUBS:US' },
        { BBG: 'TMO:US' },
        { BBG: 'BLK:US' },
        { BBG: 'FAST:US' },
        { BBG: '1801:HK' },
        { BBG: 'SYF:US' },
        { BBG: 'DOV:US' },
        { BBG: 'KR:US' },
        { BBG: 'AAPL:US' },
        { BBG: 'LMT:US' },
        { BBG: '9977:JP' },
        { BBG: 'SIVB:US' },
        { BBG: '600310:C1' },
        { BBG: '6750:JP' },
        { BBG: 'NSTG:US' },
        { BBG: 'CENN:US' },
        { BBG: 'NET:US' },
        { BBG: 'TWLO:US' },
        { BBG: 'PKX:US' },
        { BBG: 'HAS:US' },
        { BBG: 'BBK:US' },
        { BBG: '600560:C1' },
        { BBG: 'SLB:US' },
        { BBG: 'DKS:US' },
        { BBG: 'IPG:US' },
      ]);
    });

    eventList.on('event-audio', ({ action, origin }) => {
      console.log(`Iframe 1: ${action}: - ${origin}`);
    });
    eventList.on('instrument-selected', (x) => {
      console.log(`Iframe 1`, x);
    });
    eventList.on('event-selected', (event) => {
      console.log('Iframe 1, selected event: ', event);
    });
    // const eventList2 = new Aiera.Module(
    //   'https://public.aiera.com/aiera-sdk/dev/0.0.46/modules/EventList/index.html',
    //   'example_iframe2'
    // );
    // eventList2.load().then(() => {
    //   eventList2.authenticateApiKey('9b9a25ca85b41fb3c136f9814e7e8105');
    // });
    // eventList2.on('authenticated', () => {
    //   eventList2.configure({
    //     hideSettings: true,
    //     options: {
    //       //ticker: 'meta',
    //       eventListFilters: [
    //         { name: 'transcripts', visible: true, defaultValue: true },
    //         { name: 'earningsOnly', visible: true, defaultValue: true },
    //       ],
    //       showPartials: true,
    //       showSentiment: true,
    //     },
    //     overrides: {
    //       //   style: `
    //       //         .eventlist__filterby {
    //       //             background-color: blue
    //       //         }
    //       //     `,
    //     },
    //     tracking: {
    //       userId: '123abc',
    //     },
    //   });
    // });
    // eventList2.on('configured', () => {
    //   eventList2.setWatchlist([
    //     { ticker: 'AAPL' },
    //     { ticker: 'bynd' },
    //     { ticker: 'googl' },
    //     { ticker: 'pton' },
    //     { ticker: 'meta' },
    //   ]);
    // });
    // eventList2.on('event-audio', ({ action, origin }) => {
    //   console.log(`Iframe 2: ${action}: - ${origin}`);
    // });
    // eventList2.on('instrument-selected', (x) => {
    //   console.log(`Iframe 2`, x);
    // });
    // eventList2.on('event-selected', (event) => {
    //   console.log('Iframe 2, selected event: ', event);
    // });
  }
}
