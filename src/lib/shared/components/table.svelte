<script lang="ts">
  /**
   * [{...}, {...}]
   */
  export let columns;

  /**
   * [
   *   [{ name: ''...}, {...}],
   *   [{...}, {...}]
   * ]
   */
  export let rows;
</script>

<div class="not-prose">
  <div class="mt-8 flex flex-col">
    <div>
      <div class="inline-block min-w-full py-2 align-middle">
        <div
          class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr class="divide-x divide-gray-200">
                {#each columns as { name: columnName, link }}
                  {#if link}
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6 hover:text-blue-400 hover:underline"
                    >
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {columnName}
                      </a>
                    </th>
                  {:else}
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >{columnName}</th
                    >
                  {/if}
                {/each}
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              {#each rows as row}
                <tr class="divide-x divide-gray-200">
                  {#each row as { value: rowDatum }, index}
                    <td
                      class={`py-4 pl-4 pr-4 text-sm font-medium ${
                        index === 0 ? 'text-left font-extrabold' : 'text-right'
                      } text-gray-900 sm:pl-6`}>{rowDatum}</td
                    >
                  {/each}
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
