"use strict";(self.webpackChunkiaindavis_dev=self.webpackChunkiaindavis_dev||[]).push([[5672],{83320:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>R,default:()=>C,frontMatter:()=>L,metadata:()=>r,toc:()=>w});const r=JSON.parse('{"id":"projects/cover-letter-automation/implementation-details/implementation-details","title":"Implementation Details","description":"Modules","source":"@site/docs/projects/03-cover-letter-automation/01-implementation-details/01-implementation-details.mdx","sourceDirName":"projects/03-cover-letter-automation/01-implementation-details","slug":"/projects/cover-letter-automation/implementation-details/","permalink":"/preview/pr-68/docs/projects/cover-letter-automation/implementation-details/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/03-cover-letter-automation/01-implementation-details/01-implementation-details.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Implementation Details"},"sidebar":"projectsSidebar","previous":{"title":"Automated Cover Letter Generation","permalink":"/preview/pr-68/docs/projects/cover-letter-automation/"},"next":{"title":"Challenges","permalink":"/preview/pr-68/docs/projects/cover-letter-automation/challenges/"}}');var o=t(74848),a=t(28453),i=t(77086),s=t(36026),l=t(62360);function d(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Code.gs is the entry point for the script, and performs high-level orchestration."}),"\n",(0,o.jsx)(n.p,{children:"I would probably be wise to extract the late-added logic that writes\nthe URL of the created (or updated) cover-letter to the spreadsheet\ninto it's own module, but I've already invested a lot of time in this,\nand it's essentially a one-liner."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="Code.gs" showLineNumbers',children:"function generateCoverLetters() {\n  const sheet = SpreadsheetApp\n    // this is a bound script -- activeSpreadsheet is always the same sheet, and always non-null\n    .getActiveSpreadsheet()\n    .getSheetByName(JOB_LISTINGS_SHEET_NAME);\n\n  const effectiveRange = getEffectiveRange(sheet);\n  const jobListingRows = effectiveRange.getValues();\n  \n  for ([i, listingRow] of jobListingRows.entries()){\n    if(listingRow.every(value => value === '')) continue;\n    const listing = mapDataRowToJobListingRecord(listingRow);\n\n    const coverLetterFile = createCoverLetterPathAndFile(listing);\n    updateCoverLetter(coverLetterFile, listing);\n    \n    sheet.getRange(effectiveRange.getRow() + i, 7).setFormula(`=HYPERLINK(\"${coverLetterFile.getUrl()}\", \"Cover Letter\")`);\n  };\n}\n\nfunction onOpen() {\n  const ui = SpreadsheetApp.getUi();\n  ui.createMenu('Job Listing Tools')\n    .addItem('Generate Cover Letters', 'generateCoverLetters')\n    .addToUi();\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"rangeHandling.gs performs a series of operations on Google Sheets\nranges. Not on the values in the ranges -- transformations of the\nranges themselves."}),"\n",(0,o.jsx)(n.p,{children:"These are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"expand the range to include all columns in the sheet (to ensure we capture all the required data)"}),"\n",(0,o.jsx)(n.li,{children:"strip the header row from the range, if it is included"}),"\n",(0,o.jsx)(n.li,{children:"supply a default range if the range has no rows (after stripping headers) or if all cells in the range are empty."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Each of these depend on having access to the sheet, therefore the\nfunctions are defined as the return value of factories, and the sheet\nis supplied by way of an ",(0,o.jsx)(n.code,{children:"init"})," function."]}),"\n",(0,o.jsx)(n.p,{children:"These initialized functions are then wrapped in decorators and\ncomposed into a sequence of operations that performs a meaningful\ntask, in this case: returning a range in the spreadsheet value that:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"includes the selected portion of the spreadsheet, except the header row"}),"\n",(0,o.jsxs)(n.li,{children:["includes all columns for selected rows\n",(0,o.jsx)(n.strong,{children:"OR"})," a range in the spreadsheet that:"]}),"\n",(0,o.jsx)(n.li,{children:"includes all rows and columns with meaningful data (default if an empty range is selected);"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["by convention, a ",(0,o.jsx)(n.code,{children:"compose"})," function generally uses 'reduceRight'. I\ngenerally prefer to use ",(0,o.jsx)(n.code,{children:"reduce"})," as it puts the definition of\noperations in the same order they will be executed, which seems much\nmore intuitive to me."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="rangeHandling.gs" showLineNumbers',children:"const isRangeEmpty = (range) => !range || range.getNumRows() > 1 && range.getValues()[0].every(cell => cell === \"\");\nconst rangeIncludesHeaderRow = (range) => range && range.getRow() === 1;\nconst getDefaultRange = (sheet) => sheet && sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());\n\n\nconst getActiveRangeFactory = (sheet) => () => sheet.getActiveRange()\n\nexpandRangeFactory = (sheet) => (range) => {\n  Logger.log('Expanding range to include all spreadsheet columns')\n  return newRange = sheet.getRange(range.getRow(), 1, range.getLastRow(), sheet.getLastColumn());\n}\n\nconst stripHeaderRowFactory = (sheet) => (range) => {\n  if(rangeIncludesHeaderRow(range) && range.getNumRows() === 1) {\n    return null;\n  }\n\n  const [firstRow, numRows] = rangeIncludesHeaderRow(range) \n    ? [2, range.getNumRows() - 1]\n    : [range.getRow(), range.getNumRows()];\n\n  return sheet.getRange(firstRow, range.getColumn(), numRows, range.getNumColumns());\n}\n\nconst applyDefaultIfEmptyFactory = (sheet) => (range) => {\n  if(isRangeEmpty(range)) {\n    Logger.log(\"Range is empty. Using default range (all data rows)\");\n    return getDefaultRange(sheet);\n  }\n  return range;\n}\n\nconst initRangeFuncs = (sheet) => ({\n  getActiveRange: logRangeTransform(getActiveRangeFactory(sheet), 'getActiveRange'),\n  expandRange: logRangeTransform(skipIfNull(expandRangeFactory(sheet)), 'expandRange'),\n  stripHeaderRow: logRangeTransform(skipIfNull(stripHeaderRowFactory(sheet)), 'stripHeaderRow'),\n  applyDefaultIfEmpty: logRangeTransform(applyDefaultIfEmptyFactory(sheet), 'applyDefaultIfEmpty'), \n});\n\n// if the active range is empty, select all data in the sheet\nconst getEffectiveRange = (sheet) => {\n  const {getActiveRange, expandRange, stripHeaderRow, applyDefaultIfEmpty} = initRangeFuncs(sheet);\n\n  const applyTransforms = compose(\n    getActiveRange,\n    expandRange,\n    stripHeaderRow,\n    applyDefaultIfEmpty\n  );\n\n  const effectiveRange = applyTransforms(sheet);\n  return isRangeEmpty(effectiveRange) ? getDefaultRange(sheet) : effectiveRange;\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function u(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This very simple file just includes the transformation from a row of\ndata in the spreadsheet to a JavaScript object that can be passed\naround and manipulated more easily."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="jobListingRecord.gs" showLineNumbers',children:"const _mapDataRowToJobListingRecord = ([companyName, roleTitle, uniqueId, hiringManager, listedAt]) => ({\n    companyName,\n    roleTitle,\n    uniqueId,\n    hiringManager: hiringManager || DEFAULT_HIRING_MANAGER,\n    listedAt,\n    coverLetterDate: toCoverLetterDate(new Date())\n});\n\nconst mapDataRowToJobListingRecord = (row) => {\n  Logger.log(`mapping row: ${row} to object`);\n  const obj = _mapDataRowToJobListingRecord(row);\n  Logger.log(`mapped result: ${JSON.stringify(obj)}`);\n  return obj;\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function m(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Basic file and folder options. These eventually get grouped into\n",(0,o.jsx)(n.code,{children:"findOrCreate"})," operations in ",(0,o.jsx)(n.code,{children:"fileAndFolderHandling.gs"}),", but this file\ncontains just the interactions with ",(0,o.jsx)(n.code,{children:"DriveApp"})]}),"\n",(0,o.jsx)(n.p,{children:"They're pretty straight-forward."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="folderAndFileOps.gs" showLineNumbers',children:'const getFolderById = (folderId) => () => {\n  try {\n    Logger.log(`Getting folder with ID: ${folderId}`)\n    const folder = DriveApp.getFolderById(folderId);\n    if(folder) Logger.log(`found folder ${folder.getName()} at ${folder.getUrl()}`);\n    return folder;\n  } catch (e) {\n    Logger.log(`unable to find folder with ID ${folderId}: ${e instanceof Error ? e.message : e}`)\n    return null;\n  }\n}\n\nconst findFolderByName = (folderName, parentFolder = DEFAULT_PARENT) => () => {\n  const folders = parentFolder.getFoldersByName(folderName);\n  folder = folders.hasNext() ? folders.next() : null;\n  if(folder) {\n    Logger.log(`found folder "${folderName}" with ID: ${folder.getId()}`);\n  } else {\n    Logger.log(`found no folders called \'${folderName} under ${parentFolder.getUrl()}`);\n  }\n  return folder;\n}\n\nconst findFileByName = (fileName, parentFolder = DEFAULT_PARENT) => () => {\n  const files = parentFolder.getFilesByName(fileName);\n  const file = files.hasNext() ? files.next() : null;\n  if(file) {\n    Logger.log(`found file "${fileName}" with ID: ${file.getId()}`);\n  } else {\n    Logger.log(`found no files called \'${fileName} under ${parentFolder.getUrl()}`);\n  }\n  return file;\n}\n\nconst createFolder = (folderName, parentFolder = DEFAULT_PARENT) => () => {\n  Logger.log(`creating new Folder "${folderName}" at ${parentFolder.getName()}`)\n  try {\n    const folder = parentFolder.createFolder(folderName);\n    Logger.log(`successfully created folder "${folderName}" with ID ${folder.getId()} at ${folder.getUrl()}`)\n    return folder;\n  } catch (e) {\n    Logger.log(`Failed to create file ${folderName} at ${parentFolder.getUrl()}: ${e instanceof Error ? e.message : e }`);\n    return null;\n  }\n}\n\nconst cloneTemplate = (fileName, parentFolder = DEFAULT_PARENT) => () => {\n  Logger.log(`creating new File "${fileName}" at ${parentFolder.getName()}`)\n\n  try {\n    const file = DriveApp.getFileById(CL_TEMPLATE_DOC_ID).makeCopy(fileName, parentFolder);\n    Logger.log(`successfully created file "${fileName}" with ID ${file.getId()} at URL ${file.getUrl()}`)\n    return file;\n  } catch (e) {\n    Logger.log(`Failed to create file ${fileName} at ${parentFolder.getUrl()}: ${e instanceof Error ? e.message : e }`);\n    return null;\n  }\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}function y(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The point of this file is to find each folder on the path to the\ncover-letter file, creating it if it does not exist, then do the same\nfor the cover-letter file itself, ",(0,o.jsx)(n.a,{href:".",title:"The cloning isn't actually necessary for the file contents, as we're going to overwrite it anyway, but creating a file from scratch at the right location in the drive is suprisingly challenging, and you end up with some unhelpful defaults. By cloning, we end up with the same margins, no header, etc.",children:"cloning it from the template\nfile"})," if it doesn't already exist, and returning the\nexisting file if it does"]}),"\n",(0,o.jsxs)(n.p,{children:["Functions in this file compose the basic folder and file operations\nfrom ",(0,o.jsx)(n.code,{children:"folderAndFileOps.gs"})," into higher-level operations. This file\nuses the same pattern of ",(0,o.jsx)(n.a,{href:".",title:"This time with the jobListingRecord object from `jobListingRecord.gs`",children:"initializing functions using factories"}),", then\nwrapping them in decorators and composing them, making for a highly\nmaintainable and readable file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="folderAndFileHandling.gs" showLineNumbers',children:"const generateCompanyFolderName = (jobListingRecord) => `${jobListingRecord.companyName}`;\nconst generateListingFolderName = (jobListingRecord) => `${jobListingRecord.roleTitle} | ${jobListingRecord.uniqueId}`\nconst generateCoverLetterName = (jobListingRecord) => `Cover Letter -- ${jobListingRecord.companyName} | ${jobListingRecord.uniqueId}`\n\nconst DEFAULT_PARENT = DriveApp.getRootFolder();\n\nconst findOrCreateEmploymentFolderFactory = compose(\n  logFileTransform(getFolderById(EMPLOYMENT_FOLDER_ID), 'getEmploymentFolderById'),\n  skipIfNonNull(logFileTransform(findFolderByName(EMPLOYMENT_FOLDER_NAME), 'findEmploymentFolderByName')),\n  skipIfNonNull(logFileTransform(createFolder(EMPLOYMENT_FOLDER_NAME), 'createEmploymentFolder'))\n);\n\nconst findOrCreateCompanyFolderFactory = (jobListingRecord) => (employmentFolder) => {\n  const folderName = generateCompanyFolderName(jobListingRecord);\n  const {companyName} = jobListingRecord;\n\n  return compose(\n    logFileTransform(findFolderByName(companyName, employmentFolder), 'findCompanyFolderByName'),\n    skipIfNonNull(logFileTransform(createFolder(companyName, employmentFolder), 'createCompanyFolder'))\n  )\n}\n\nconst findOrCreateListingFolderFactory = (jobListingRecord) => (companyFolder) => {\n  const folderName = generateListingFolderName(jobListingRecord);\n\n  return compose(\n    logFileTransform(findFolderByName(folderName, companyFolder), 'findListingFolderByName'),\n    skipIfNonNull(logFileTransform(createFolder(folderName, companyFolder), 'createListingFolder')),\n  )\n}\n\nconst findOrCreateCoverLetterFileFactory = (jobListingRecord) => (listingFolder) => {\n  const coverLetterFilename = generateCoverLetterName(jobListingRecord);\n\n  return compose(\n    logFileTransform(findFileByName(coverLetterFilename, listingFolder), 'findCoverLetterFileByName'),\n    skipIfNonNull(logFileTransform(cloneTemplate(coverLetterFilename, listingFolder), 'createCoverLetterFile')),\n  )\n}\n\nconst initFolderTransforms = (jobListingRecord) => ({\n  findOrCreateEmploymentFolder: findOrCreateEmploymentFolderFactory,\n  findOrCreateCompanyFolder: findOrCreateCompanyFolderFactory(jobListingRecord),\n  findOrCreateListingFolder: findOrCreateListingFolderFactory(jobListingRecord),\n  findOrCreateCoverLetter: findOrCreateCoverLetterFileFactory(jobListingRecord),\n});\n\nfunction createCoverLetterPathAndFile(jobListingRecord) {\n\n  const {\n    findOrCreateEmploymentFolder,\n    findOrCreateCompanyFolder,\n    findOrCreateListingFolder,\n    findOrCreateCoverLetter\n  } = initFolderTransforms(jobListingRecord);\n\n  const employmentFolder = findOrCreateEmploymentFolder();\n  const companyFolder = findOrCreateCompanyFolder(employmentFolder)();\n  const listingFolder = findOrCreateListingFolder(companyFolder)();\n  const coverLetter = findOrCreateCoverLetter(listingFolder)();\n\n  return coverLetter;\n}\n\n\n"})})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(y,{...e})}):y(e)}function v(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Like ",(0,o.jsx)(n.code,{children:"Code.gs"}),", this file could probably use some further decomposition."]}),"\n",(0,o.jsx)(n.p,{children:"This file assumes we have already retrieved (or created) the\ncover-letter file at its appointed place in the Drive."}),"\n",(0,o.jsx)(n.p,{children:"It opens the template file, and the cover letter file, and copies the\ncontent from one to the other, preserving formatting. This has the\nadvantage (over replacing the file) of preserving version history.\nThen, in the cloned document, it replaces the placeholder tokens with\nthe actual values from the spreadsheet."}),"\n",(0,o.jsx)(n.p,{children:"Note: there are a couple of peculiar lines here:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const firstParagraph = body.getChild(0)\nif(!firstParagraph.asParagraph().getText().trim()) firstParagraph.removeFromParent();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["These are there because the ",(0,o.jsx)(n.code,{children:"body.clear()"})," function still leaves a\nsingle empty space or newline or something. The end result is that\neverything you append from the source document works just fine, except\nthat there's an empty bar just at the top of the page. If such a line\nexists in the document, these two lines of script remove it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="updateCoverLetter.gs" showLineNumbers',children:"function* getChildren(section) {\n  for (index of range(section.getNumChildren())) {\n    yield section.getChild(index).copy();\n  }\n}\n\nconst getAppendFunc = (element) => ({\n  [DocumentApp.ElementType.PARAGRAPH]: (body) => body.appendParagraph(element),\n  [DocumentApp.ElementType.LIST_ITEM]: (body) => body.appendListItem(element),\n  [DocumentApp.ElementType.TABLE]: (body) => body.appendTable(element),\n}[element.getType()])\n\nfunction updateCoverLetter(coverLetterFile, jobListingRecord) {\n  let templateDoc, coverLetterDoc;\n\n  try {\n    templateDoc = DocumentApp.openById(CL_TEMPLATE_DOC_ID);\n    coverLetterDoc = DocumentApp.openById(coverLetterFile.getId());\n\n    const body = coverLetterDoc.getBody();\n    body.setMarginTop(0);\n    body.clear();\n\n    for(child of getChildren(templateDoc.getBody())) {\n      const appendElementTo = getAppendFunc(child);\n      appendElementTo(body);\n    }\n\n    const firstParagraph = body.getChild(0)\n    if(!firstParagraph.asParagraph().getText().trim()) firstParagraph.removeFromParent();\n\n    body.replaceText(COMPANY_NAME_TOKEN, jobListingRecord.companyName);\n    body.replaceText(ROLE_TITLE_TOKEN, jobListingRecord.roleTitle);\n    body.replaceText(HIRING_MANAGER_TOKEN, jobListingRecord.hiringManager);\n    body.replaceText(LISTED_AT_TOKEN, jobListingRecord.listedAt);\n    body.replaceText(CL_DATE_TOKEN, jobListingRecord.coverLetterDate);\n\n    Logger.log(`Updated cover letter: ${coverLetterFile.getName()}`);\n\n  } catch (e) {\n    Logger.log(`Failed to update cover letter: ${e instanceof Error ? e.message : e}`);\n  } finally {\n    templateDoc?.saveAndClose();\n    coverLetterDoc?.saveAndClose();\n  }\n}\n\n"})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(v,{...e})}):v(e)}function F(e){const n={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"File creates a custom menu in the Google Sheets app so the script can\nbe run without having to open the script editor in another tab."}),"\n",(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"onOpen"})," function is supposed to run automatically when\nthe document opens, but to make this work, I had to set up an explicit\ntrigger in the AppsScript editor."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",metastring:'title="ui.gs" showLineNumbers',children:"function onOpen() {\n  const ui = SpreadsheetApp.getUi();\n  ui.createMenu('Job Listing Tools')\n    .addItem('Generate Cover Letters', 'generateCoverLetters')\n    .addToUi();\n}\n\n"})})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(F,{...e})}):F(e)}const L={title:"Implementation Details"},R=void 0,N={},w=[{value:"Modules",id:"modules",level:2}];function T(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"modules",children:"Modules"}),"\n",(0,o.jsx)(l.RightFloated,{width:"35%",children:(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Unfortunately, the script is bound to the spreadsheet, and I can't\nshare it directly without making the sheet open to the world. I'll\nshare the code here, as a next-best effort."})})}),"\n",(0,o.jsxs)(n.p,{children:["In Google AppsScript, everything exists in the global scope. You can\nget the benefits of modules if you develop locally, and synchronize\nyour changes with ",(0,o.jsx)(n.code,{children:"clasp"}),", but that seemed ",(0,o.jsx)(n.a,{href:".",title:"I spent about two days on this, not counting the documentation, and that's already more time than I intended to spend",children:"a bit\nheavy-weight"})," for this project.  That said, I wanted\nto keep my code as organized as I could so, barring some utility\nfunctions and constants, I broke it up into the following chunks:"]}),"\n",(0,o.jsx)(l.ClearFloat,{}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"Code.gs",children:(0,o.jsx)(c,{})}),(0,o.jsx)(s.A,{value:"rangeHandling.gs",children:(0,o.jsx)(g,{})}),(0,o.jsx)(s.A,{value:"jobListingRecord.gs",children:(0,o.jsx)(h,{})}),(0,o.jsx)(s.A,{value:"folderAndFileOps.gs",children:(0,o.jsx)(f,{})}),(0,o.jsx)(s.A,{value:"folderAndFileHandling.gs",children:(0,o.jsx)(j,{})}),(0,o.jsx)(s.A,{value:"updateCoverLetter.gs",children:(0,o.jsx)(x,{})}),(0,o.jsx)(s.A,{value:"ui.gs",children:(0,o.jsx)(b,{})})]}),"\n"]})}function C(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(T,{...e})}):T(e)}},33613:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(74848);n.default=()=>(0,r.jsx)("br",{style:{clear:"both"}})},8712:(e,n,t)=>{var r=t(47635).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(t(96540));var o=t(74848);const a="35%",i={float:"left",padding:"0.5em 3em 0 0"};n.default=e=>{let{width:n=a,children:t}=e;return(0,o.jsx)("div",{style:{...i,width:n},children:t})}},15887:(e,n,t)=>{var r=t(47635).default;Object.defineProperty(n,"__esModule",{value:!0}),n.linkSeparator=n.default=void 0;r(t(96540));var o=t(74848);const a=n.linkSeparator="\xa0\xa0|\xa0\xa0",i={fontSize:"smaller"};n.default=e=>{let{links:n}=e;return console.log(n),(0,o.jsx)("div",{style:i,children:n.map((e=>{let{label:n,url:t,tooltipText:r}=e;return(0,o.jsx)("a",{href:t,title:r,children:n})})).reduce(((e,n)=>[e,a,n]))})}},49065:(e,n,t)=>{var r=t(47635).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(t(96540));var o=t(74848);const a="35%",i={float:"right",padding:"1em 0 0 3em"};n.default=e=>{let{width:n=a,children:t}=e;return(0,o.jsx)("div",{style:{...i,width:n},children:t})}},62360:(e,n,t)=>{var r=t(47635).default;Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ClearFloat",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(n,"LeftFloated",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"Links",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(n,"RightFloated",{enumerable:!0,get:function(){return i.default}});var o=r(t(15887)),a=r(t(8712)),i=r(t(49065)),s=r(t(33613))},36026:(e,n,t)=>{var r=t(47635).default;n.A=function(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.default)(a.default.tabItem,r),hidden:t,children:n})};r(t(96540));var o=r(t(71508)),a=r(t(30815)),i=t(74848)},77086:(e,n,t)=>{var r=t(47635).default,o=t(95754).default;n.A=function(e){const n=(0,l.default)();return(0,c.jsx)(u,{...e,children:(0,s.sanitizeTabsChildren)(e.children)},String(n))};var a=o(t(96540)),i=r(t(71508)),s=t(50155),l=r(t(92303)),d=r(t(19897)),c=t(74848);function p(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.useScrollPositionBlocker)(),g=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==r&&(p(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:g,...o,className:(0,i.default)("tabs__item",d.default.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.default)("margin-top--md",e.props.className)}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function u(e){const n=(0,s.useTabs)(e);return(0,c.jsxs)("div",{className:(0,i.default)("tabs-container",d.default.tabList),children:[(0,c.jsx)(p,{...n,...e}),(0,c.jsx)(g,{...n,...e})]})}},30815:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={tabItem:"tabItem_Ymn6"}},19897:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);