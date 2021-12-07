<template>
	<div class="mt-4 lg:pt-8 py-8 lg:py-16 px-6 md:px-16 lg:px-24 prose lg:prose-lg mx-auto max-w-2xl lg:max-w-3xl">
		<div class="bg-white shadow px-10 py-5 rounded-md space-y-8">
			<div class="text-gray-600 text-2xl font-semibold text-center">Create Magazine</div>
			<form action="#">
				<div class="space-y-4">
					<div class="space-y-1">
						<label for="title" class="text-md font-medium text-gray-700">
							Title
						</label>
						<input class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" type="text" name="title">
					</div>
					<div class="space-y-1">
						<label for="photo" class="text-md font-medium text-gray-700">
							Image
						</label>
						<div class="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
							<div class="text-center">
								<svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
									<path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
								<div class="flex text-sm text-gray-600">
									<label for="image" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-offset-2 focus-within:ring-indigo-500">
										Upload a image
									</label>
									<input type="file" id="image" name="image" class="sr-only">
									<!-- <p class="pl-1">or drag and drop</p> -->
								</div>
								<p class="text-xs text-gray-500">
									PNG, JPG, JPEG
								</p>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>