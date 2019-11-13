function sortTable(obj, sTableId, iCol) {
  var rows = $('#' + sTableId)
    .find('tr:gt(0)')
    .toArray()
    .sort(comparer(iCol))
  if (!(rows && rows.length && rows[0].cells && rows[0].cells[iCol])) return
  var sortFlag = true
  for (var i = 0; i < rows.length; i++) {
    if (rows[0].cells[iCol].textContent !== rows[i].cells[iCol].textContent) {
      sortFlag = false
    }
  }

  if ($(obj).hasClass('sorting')) {
    $(obj)
      .removeClass('sorting')
      .addClass('sorting_asc')
    $(obj)
      .siblings('.sorting')
      .removeClass('sorting_asc')
      .addClass('sorting')
    $(obj)
      .siblings('.sorting')
      .removeClass('sorting_desc')
      .addClass('sorting')
  }

  if ($(obj).hasClass('sorting_asc')) {
    $(obj)
      .removeClass('sorting_asc')
      .addClass('sorting_desc')
    if (sortFlag) return
    rows = rows.reverse()
  } else {
    $(obj)
      .removeClass('sorting_desc')
      .addClass('sorting_asc')
  }
  if (sortFlag) return
  $('#' + sTableId)
    .children('tbody')
    .html(rows)
}

function comparer(index) {
  return function(a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index)
    return $.isNumeric(valA) && $.isNumeric(valB)
      ? valA - valB
      : valA.localeCompare(valB)
  }
}

function getCellValue(row, index) {
  return $(row)
    .children('td')
    .eq(index)
    .text()
}
